namespace WebAPI.Models
{
    public class Merchandise
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int Count { get; set; }
        public decimal Price { get; set; }
        public decimal Rate { get; set; }
    }
}
