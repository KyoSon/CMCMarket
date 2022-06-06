using WebAPI.Models;
using System.Text.Json;

namespace WebAPI.Common
{
    public class Utils
    {
        private static string fileName = "MerchandiseList.txt";
       
        public static List<Merchandise> ReadMerchandiseInfoFromFile()
        {
            var merchandiseList = new List<Merchandise> { };
            if (File.Exists(fileName))
            {
                // Read object from simple file in json format
                string jsonString = File.ReadAllText(fileName);
                merchandiseList = JsonSerializer.Deserialize<List<Merchandise>>(jsonString);
            }
            return merchandiseList ?? new List<Merchandise> { };
        }

        public static decimal Calculate(List<Merchandise> ml)
        {
            decimal result = 0.0m;
            if (ml.Count > 0)
            {
                foreach (Merchandise merchandise in ml)
                {
                    result += merchandise.Count * merchandise.Price * merchandise.Rate;
                }

                if (result < 50)
                {
                    result += 10;
                } else
                {
                    result += 20;
                }

            }
            return result;
        }
    }
}
