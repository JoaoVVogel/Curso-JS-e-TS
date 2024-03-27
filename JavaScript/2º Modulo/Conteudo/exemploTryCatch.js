function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Aguardando instância de Date");
  }
  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}
try{
    const data = new Date('04-04-2005 14:48:33');
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    //tratar erro
    console.log('erro...')
}finally{
    console.log('...');
}