<?php

namespace App\Exports;

use App\Models\UmrahFinance;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use Carbon\Carbon;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Border;

class UmrahFinanceExport implements FromCollection, WithHeadings, WithStyles, WithEvents, WithCustomStartCell
{

    protected $schedule_id;
    protected $date_start;
    protected $date_end;

    public function __construct($schedule_id, $date_start, $date_end)
    {
        $this->schedule_id = $schedule_id;
        $this->date_start = $date_start;
        $this->date_end = $date_end;
    }

    public function collection()
    {
        $data = UmrahFinance::with('umrahSchedule', 'createdBy', 'updatedBy')
            ->when($this->schedule_id, function ($query) {
                return $query->where('umrah_schedule_id', $this->schedule_id);
            })
            ->whereBetween('date', [$this->date_start, $this->date_end])
            ->get()
            ->map(function ($row) {
                return [
                    $row->id,
                    $row->name,
                    $row->description,
                    Carbon::parse($row->date)->translatedFormat('d F Y'),
                    $row->type,
                    $row->type == 'income' ? 'Rp. ' . number_format($row->amount, 0, ',', '.') : 'Rp. -' . number_format($row->amount, 0, ',', '.'),
                    $row->payment_method,
                    $row->ref_no,
                    $row->createdBy->name . ' (' . Carbon::parse($row->created_at)->format('d M Y H:i:s') . ')',
                    $row->updatedBy == null ? '-' : $row->updatedBy->name . ' (' . Carbon::parse($row->updated_at)->format('d M Y H:i:s') . ')',
                ];
            });

        return $data;
    }

    public function headings(): array
    {
        return [
            'No',
            'Nama',
            'Deskripsi',
            'Tanggal',
            'Jenis',
            'Jumlah',
            'Metode Pembayaran',
            'No Ref',
            'Dibuat Oleh',
            'Terakhir Diperbarui Oleh',
        ];
    }

    public function startCell(): string
    {
        return 'A4';  // Mulai di baris 4
    }

    public function styles($sheet)
    {
        return [
            1 => ['font' => ['bold' => true]],
        ];
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $sheet = $event->sheet->getDelegate();

                // Menambahkan judul di baris 1
                $sheet->mergeCells('A1:M1');
                $sheet->setCellValue('A1', 'Data Keuangan Umrah ' . Carbon::parse($this->date_start)->format('d M Y') . ' - ' . Carbon::parse($this->date_end)->format('d M Y'));
                $sheet->getStyle('A1')->getFont()->setBold(true)->setSize(16);
                $sheet->getStyle('A1')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

                // Menambahkan tanggal di baris 2
                $sheet->mergeCells('A2:M2');
                $sheet->setCellValue('A2', 'Import Tanggal: ' . date('d-m-Y H:i:s'));
                $sheet->getStyle('A2')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

                // Tambahkan warna latar belakang untuk heading di baris ke-4
                $sheet->getStyle('A4:J4')->applyFromArray([
                    'fill' => [
                        'fillType' => Fill::FILL_SOLID,
                        'color' => ['rgb' => 'FFFF00'],  // Warna kuning
                    ],
                ]);

                // Menambahkan border untuk heading
                $sheet->getStyle('A4:J4')->applyFromArray([
                    'borders' => [
                        'allBorders' => [
                            'borderStyle' => Border::BORDER_THIN,
                            'color' => ['rgb' => '000000'],  // Warna hitam
                        ],
                    ],
                ]);

                // Menambahkan border untuk data (mulai dari baris 5 sampai baris terakhir)
                $rowCount = $sheet->getHighestRow();
                $sheet->getStyle('A5:J' . $rowCount)->applyFromArray([
                    'borders' => [
                        'allBorders' => [
                            'borderStyle' => Border::BORDER_THIN,
                            'color' => ['rgb' => '000000'],  // Warna hitam
                        ],
                    ],
                ]);

                //jika row 5 income maka warna hijau, jika row 5 expense maka warna merah
                $conditionalStyles = $sheet->getStyle('E5:E' . $rowCount)->getConditionalStyles();

                $incomeCondition = new \PhpOffice\PhpSpreadsheet\Style\Conditional();
                $incomeCondition->setConditionType(\PhpOffice\PhpSpreadsheet\Style\Conditional::CONDITION_EXPRESSION);
                $incomeCondition->setOperatorType(\PhpOffice\PhpSpreadsheet\Style\Conditional::OPERATOR_NONE);
                $incomeCondition->setConditions(['E5="income"']);
                $incomeCondition->getStyle()->getFill()->setFillType(Fill::FILL_SOLID)->getStartColor()->setRGB('00FF00');

                $expenseCondition = new \PhpOffice\PhpSpreadsheet\Style\Conditional();
                $expenseCondition->setConditionType(\PhpOffice\PhpSpreadsheet\Style\Conditional::CONDITION_EXPRESSION);
                $expenseCondition->setOperatorType(\PhpOffice\PhpSpreadsheet\Style\Conditional::OPERATOR_NONE);
                $expenseCondition->setConditions(['E5="expense"']);
                $expenseCondition->getStyle()->getFill()->setFillType(Fill::FILL_SOLID)->getStartColor()->setRGB('FF0000');

                $conditionalStyles[] = $incomeCondition;
                $conditionalStyles[] = $expenseCondition;

                $sheet->getStyle('E5:E' . $rowCount)->setConditionalStyles($conditionalStyles);

                // Auto-fit kolom (menyesuaikan lebar kolom dengan konten)
                foreach (range('A', 'J') as $column) {
                    $sheet->getColumnDimension($column)->setAutoSize(true);
                }
            },
        ];
    }
}
