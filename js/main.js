function esconderSaldo() {
    var escondeSaldo = document.getElementById("esconde-saldo");
    var escondeIcon = document.getElementById("icon-esconde-saldo");
    
    var verificaClasse = escondeSaldo.classList.contains("saldo-desativado")
    var verificaIcon = escondeSaldo.classList.contains("mdi mdi-eye-outline")

    if(verificaClasse == false && verificaIcon == false) {
        $('#esconde-saldo').addClass('saldo-desativado');
        $('#esconde-saldo-credito').addClass('saldo-desativado');
        $('#esconde-saldo-investimento').addClass('saldo-desativado');

        $('#icon-esconde-saldo').removeClass('mdi mdi-eye-outline');
        $('#icon-esconde-saldo').addClass('mdi mdi-eye-off-outline');
    } else if(verificaClasse == true) {
        $('#esconde-saldo').removeClass('saldo-desativado')
        $('#esconde-saldo-credito').removeClass('saldo-desativado');
        $('#esconde-saldo-investimento').removeClass('saldo-desativado');

        $('#icon-esconde-saldo').removeClass('mdi mdi-eye-off-outline')
        $('#icon-esconde-saldo').addClass('mdi mdi-eye-outline')
    }
}