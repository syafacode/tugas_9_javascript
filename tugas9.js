function sayurMayur(){
    var sayur = {
        nama : 'Sawi',
        umur : '2 hari',
        harga : 1000,
        warna : 'hijau'
    }
    
    for (let mayur in sayur){
        console.log(sayur[mayur]);
    }
}

sayurMayur();