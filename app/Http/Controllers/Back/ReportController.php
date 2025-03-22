<?php

namespace App\Http\Controllers\Back;

use App\Exports\UmrahFinanceExport;
use App\Http\Controllers\Controller;
use App\Models\UmrahFinance;
use App\Models\UmrahPackage;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Facades\Excel;

class ReportController extends Controller
{
    public function UmrahFinance()
    {
        $data = [
            'title' => 'Laporan Keuangan Umrah',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Laporan Keuangan Umrah',
                    'link' => route('back.report.umrah.finance')
                ]
            ],
            'umrah_packages' => UmrahPackage::with('schedules')->get(),
        ];
        // return response()->json($data);
        return view('back.pages.report.umrah-finance', $data);
    }

    public function UmrahFinanceDatatables(Request $request)
    {
        $schedule_id = $request->schedule_id;
        $date_end = $request->date_end ?? now()->toDateString();
        $date_start = $request->date_start ?? now()->subMonth()->toDateString();

        $data = UmrahFinance::with('umrahSchedule', 'createdBy', 'updatedBy')
            ->when($schedule_id, function ($query) use ($schedule_id) {
                return $query->where('umrah_schedule_id', $schedule_id);
            })
            ->whereBetween('date', [$date_start, $date_end])
            ->get();

        $total_income = $data->where('type', 'income')->sum('amount');
        $total_expense = $data->where('type', 'expense')->sum('amount');
        $total_balance = $total_income - $total_expense;

        return datatables()->of($data)
            ->addColumn('transaction', function ($row) {
                return '<div class="d-flex flex-column">
                            <a href="#"
                            class="text-gray-800 text-hover-primary mb-1">' . $row->name . '</a>
                            <span class="text-muted">' . Str::limit($row->description, 50) . '</span>
                        </div>';
            })
            ->addColumn('date', function ($row) {
                return '<span class="fw-bold">' . Carbon::parse($row->date)->format('d M Y') . '</span>';
            })
            ->addColumn('amount', function ($row) {
                if ($row->type == 'income') {
                    return '<span class="text-success">+' . number_format($row->amount, 0, ',', '.') . '</span>';
                } else {
                    return '<span class="text-danger">-' . number_format($row->amount, 0, ',', '.') . '</span>';
                }
            })
            ->addColumn('type', function ($row) {
                return '<span class="badge badge-' . ($row->type == 'income' ? 'success' : 'danger') . '">' . $row->type . '</span>';
            })
            ->addColumn('payment_info', function ($row) {
                return '<ul>
                            <li>
                                <span class="fw-bold">Metode Pembayaran:</span>
                                <span>' . ($row->payment_method ?? '-') . '</span>
                            </li>
                            <li>
                                <span class="fw-bold">No Ref:</span>
                                <span>' . ($row->payment_reference ?? '-') . '</span>
                            </li>
                            <li>
                                <span class="fw-bold">Note:</span>
                                <span>' . ($row->payment_note ?? '-') . '</span>
                            </li>
                        </ul>';
            })
            ->addColumn('attachment', function ($row) {
                if ($row->attachment) {
                    return '<a href="' . asset('storage/' . $row->attachment) . '" target="_blank">
                        <i class="ki-duotone ki-file-added text-primary fs-3x" data-bs-toggle="tooltip" data-bs-placement="right" title="Lihat File">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                    </a>';
                } else {
                    return '<i class="ki-duotone ki-file-deleted text-danger fs-3x" data-bs-toggle="tooltip" data-bs-placement="right" title="File Tidak Ada">
                        <span class="path1"></span>
                        <span class="path2"></span>
                    </i>';
                }
            })
            ->addColumn('log', function ($row) {
                return '<ul>
                    <li>
                        <span class="fw-bold">Created At:</span>
                        <span>' . Carbon::parse($row->created_at)->format('d M Y H:i') . '</span>
                    </li>

                    <li>
                        <span class="fw-bold">Created By:</span>
                        <span>' . $row->createdBy->name . '</span>
                    </li>
                </ul>

                <ul>
                    <li>
                        <span class="fw-bold">Updated At:</span>
                        <span>' . Carbon::parse($row->updated_at)->format('d M Y H:i') . '</span>
                    </li>

                    <li>
                        <span class="fw-bold">Updated By:</span>
                        <span>' . $row->updatedBy->name . '</span>
                    </li>
                </ul>';
            })
            ->with([
                'total_income' => $total_income,
                'total_expense' => $total_expense,
                'total_balance' => $total_balance,
            ])
            ->rawColumns(['transaction', 'date', 'amount', 'type', 'payment_info', 'attachment', 'log'])
            ->make(true);
    }

    public function UmrahFinanceExport(Request $request)
    {
        $schedule_id = $request->schedule_id;
        $date_end = $request->date_end ?? now()->toDateString();
        $date_start = $request->date_start ?? now()->subMonth()->toDateString();

        return Excel::download(new UmrahFinanceExport($schedule_id, $date_start, $date_end), 'laporan-keuangan-umrah.xlsx');
    }

}
