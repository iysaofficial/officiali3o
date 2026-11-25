import { AfterViewInit, Component } from '@angular/core';

/**
 * Halaman pendaftaran I3O — standar situs invensi IYSA (2026-11-25).
 *
 * Isinya formulir dasbor IYSA (embed/daftar.js): saat togel "Pendaftaran
 * Terbuka" edisi yang di-pin di dasbor menyala, tim, anggota, pembimbing, dan
 * tagihan langsung tercatat di dasbor; selama tertutup daftar.js sendiri yang
 * menampilkan keterangan "belum dibuka". Tombol Guidebook di sini dan di
 * seluruh situs diatur embed/status.js (index.html) lewat `data-iysa-tampil`.
 * Menggantikan formulir lama (formfacade, registrasi-i3o-*.vercel.app).
 */
@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
})
export class RegistrationComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        const w = window as any;
        const pasang = () => w.IysaDaftar?.pasang?.();
        if (document.querySelector('script[data-iysa-daftar-loader]')) { pasang(); return; }
        const s = document.createElement('script');
        s.src = 'https://api-dashboard.iysa.or.id/embed/daftar.js';
        s.defer = true;
        s.setAttribute('data-iysa-daftar-loader', '');
        s.onload = pasang;
        document.body.appendChild(s);
    }
}
