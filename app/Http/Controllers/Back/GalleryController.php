<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use App\Models\GalleryAlbum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use RealRashid\SweetAlert\Facades\Alert;

class GalleryController extends Controller
{
    public function album()
    {
        $data = [
            'title' => 'Gallery',
            'menu' => 'gallery',
            'sub_menu' => '',
            'list_gallery_album' => GalleryAlbum::latest()->get(),
        ];

        return view('back.pages.gallery.album', $data);
    }

    public function albumStore(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:4096',
            'description' => 'nullable',
        ], [
            'thumbnail.image' => 'Thumbnail harus berupa gambar',
            'thumbnail.mimes' => 'Format thumbnail harus jpeg, png, jpg, gif, atau svg',
            'thumbnail.max' => 'Ukuran thumbnail maksimal 4MB',
            'description.nullable' => 'Deskripsi harus berupa teks',
            'title.required' => 'Judul wajib diisi',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator)->with('error', $validator->errors()->all());
        }

        $thumbnail = null;
        if ($request->hasFile('thumbnail')) {
            $thumbnail_file = $request->file('thumbnail');
            $thumbnail = $thumbnail_file->storeAs('gallery/thumbnail', Str::slug($request->title) . '-' . time() . '.' . $thumbnail_file->getClientOriginalExtension(), 'public');
        }

        $gallery = GalleryAlbum::create([
            'title' => $request->title,
            'thumbnail' => $thumbnail,
            'description' => $request->description,
            'slug' => Str::slug($request->title),
            'meta_title' => $request->title,
            'meta_description' => "Gallery $request->title",
            'meta_keywords' => str_replace(' ', ',', $request->title),
            'user_id' => Auth::user()->id,
        ]);

        return redirect()->route('back.gallery.album')->with('success', 'Album berhasil ditambahkan');
    }

    public function albumUpdate(Request $request, $id)
    {
        $gallery = GalleryAlbum::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'thumbnail' => 'image|mimes:jpeg,png,jpg,gif,svg|max:4096',
            'description' => 'nullable',
        ], [
            'thumbnail.image' => 'Thumbnail harus berupa gambar',
            'thumbnail.mimes' => 'Format thumbnail harus jpeg, png, jpg, gif, atau svg',
            'thumbnail.max' => 'Ukuran thumbnail maksimal 4MB',
            'description.nullable' => 'Deskripsi harus berupa teks',
            'title.required' => 'Judul wajib diisi',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator)->with('error', $validator->errors()->all());
        }

        $thumbnail = null;
        if ($request->hasFile('thumbnail')) {
            if ($gallery->thumbnail) {
                Storage::delete($gallery->thumbnail);
            }
            $thumbnail_file = $request->file('thumbnail');
            $thumbnail = $thumbnail_file->storeAs('gallery/thumbnail', Str::slug($request->title) . '-' . time() . '.' . $thumbnail_file->getClientOriginalExtension(), 'public');
            $gallery->thumbnail = $thumbnail;
        }

        $gallery->title = $request->title;
        $gallery->slug = Str::slug($request->title);
        $gallery->description = $request->description;
        $gallery->meta_title = $request->title;
        $gallery->meta_description = "Gallery $request->title";
        $gallery->meta_keywords = str_replace(' ', ',', $request->title);
        $gallery->user_id = Auth::user()->id;
        $gallery->save();

        return redirect()->route('back.gallery.album')->with('success', 'Album berhasil diubah');
    }

    public function albumDestroy($id)
    {
        $gallery = GalleryAlbum::findOrFail($id);
        Storage::delete($gallery->thumbnail);
        $gallery->delete();

        return redirect()->route('back.gallery.album')->with('success', 'Album berhasil dihapus');
    }

    public function index()
    {
        $data = [
            'title' => 'Gallery Foto',
            'menu' => 'Post',
            'sub_menu' => 'Gallery',
            'list_gallery_album' => GalleryAlbum::all(),
            'list_gallery' => Gallery::latest()->get()
        ];

        // dd($data['list_gallery_album']);
        return view('back.pages.gallery.gallery', $data);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'foto' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
            'gallery_album_id' => 'required|exists:gallery_albums,id',
        ], [
            'foto.required' => 'Foto wajib diisi',
            'gallery_album_id.required' => 'Gallery wajib diisi',
            'gallery_album_id.exists' => 'Gallery tidak ditemukan',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator)->with('error', $validator->errors()->all());
        }

        $gallery_foto_video = new Gallery();
        $gallery_foto_video->type = 'foto';
        $gallery_foto_video->gallery_album_id = $request->gallery_album_id;
        $gallery_foto_video->user_id = Auth::user()->id;

        $foto = $request->file('foto');
        $foto_name = time() . '.' . $foto->getClientOriginalExtension();
        $foto->storeAs('gallery/photo', $foto_name, 'public');
        $gallery_foto_video->foto = 'gallery/photo/' . $foto_name;

        $gallery_foto_video->save();

        return redirect()->route('back.gallery.index')->with('success', 'Foto berhasil ditambahkan');
    }

    public function update(Request $request, $id)
    {
        $gallery_foto_video = Gallery::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'type' => 'required',
            'video' => 'required_if:type,video',
            'foto' => 'required_if:type,foto|image|mimes:jpeg,png,jpg,gif,svg|max:4096',
            'gallery_album_id' => 'required|exists:galleries,id',
        ], [
            'video.required_if' => 'Video wajib diisi',
            'foto.required_if' => 'Foto wajib diisi',
            'gallery_album_id.required' => 'Gallery wajib diisi',
            'gallery_album_id.exists' => 'Gallery tidak ditemukan',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator)->with('error', $validator->errors()->all());
        }

        $gallery_foto_video->type = $request->type;
        $gallery_foto_video->gallery_album_id = $request->gallery_album_id;

        if ($request->type == 'foto') {
            $foto = $request->file('foto');
            if ($foto) {
                Storage::delete($gallery_foto_video->foto);
                $foto_name = time() . '.' . $foto->getClientOriginalExtension();
                $foto->storeAs('gallery/photo', $foto_name, 'public');
                $gallery_foto_video->foto = 'gallery/photo/' . $foto_name;
            }
        } else {
            $gallery_foto_video->video = $request->video;
        }

        $gallery_foto_video->save();

        return redirect()->route('back.gallery.index')->with('success', 'Foto/Video berhasil diubah');
    }

    public function destroy($id)
    {
        $gallery_foto_video = Gallery::findOrFail($id);
        Storage::delete($gallery_foto_video->foto);
        $gallery_foto_video->delete();


        return redirect()->route('back.gallery.index')->with('success', 'Foto/Video berhasil dihapus');
    }
}
