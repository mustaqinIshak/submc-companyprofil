export default function handleChangeRupiah (angka) {
    if(angka) {
        angka = angka + '';
        var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split       = number_string.split(','),
        sisa         = split[0].length % 3,
        rupiah         = split[0].substr(0, sisa),
        ribuan         = split[0].substr(sisa).match(/\d{3}/gi);
    
        // tambahkan titik jika yang di input sudah menjadi angka ribuan
        if(ribuan){
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
        }
    
        rupiah = split[1] !== undefined ? 'Rp. ' + rupiah + ',' + split[1] : 'Rp. ' + rupiah;
  
        return rupiah
    }
}