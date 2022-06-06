using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections;
using System.Collections.Generic;
using WebAPI.Common;
using WebAPI.Models;

namespace UnitWebAPI
{
    [TestClass]
    public class UnitTestWebAPI
    {
        [TestMethod]
        public void TestCalculateFromFileInUtils()
        {
            List<Merchandise> ml = new List<Merchandise>();
            Assert.AreEqual(0.0m, Utils.Calculate(ml));

            // $10 shipping cost for orders less of $50 dollars and less.
            ml.Add(new Merchandise() { Id = 1, Count = 1, Name="Name1", Price=1.00m, Rate= 1.00m });
            ml.Add(new Merchandise() { Id = 2, Count = 2, Name = "Name2", Price = 2.00m, Rate = 2.00m });
            ml.Add(new Merchandise() { Id = 3, Count = 3, Name = "Name3", Price = 3.00m, Rate = 3.00m });
            Assert.AreEqual(46.0000m, Utils.Calculate(ml));

            // $20 for orders more than $50.
            ml.Add(new Merchandise() { Id = 4, Count = 4, Name = "Name4", Price = 4.00m, Rate = 4.00m });
            Assert.AreEqual(120.0000m, Utils.Calculate(ml));
        }

        
    }
}