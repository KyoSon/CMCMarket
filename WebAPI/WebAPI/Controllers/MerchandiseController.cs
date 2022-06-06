using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Collections.Generic;
using WebAPI.Models;
using WebAPI.Common;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MerchandiseController : ControllerBase
    {
        public MerchandiseController()
        {
        }

        [HttpGet]
        public List<Merchandise> Get()
        {
            return Utils.ReadMerchandiseInfoFromFile();
        }

        [HttpPost]
        //[Route("api/getTotal")]
        public decimal Post(List<Merchandise> merchandiseList) => Utils.Calculate(merchandiseList);
        
    }
}
