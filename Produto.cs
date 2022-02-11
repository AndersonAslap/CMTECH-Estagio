namespace CMTECH_Estagio
{
    public class Produto
    {
        public String Id { get; set; }
        public double Preco { get; set; }
        public int Estoque => (int)Preco+2;
    }
}