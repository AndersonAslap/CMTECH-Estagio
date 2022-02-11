using Microsoft.AspNetCore.Mvc;

namespace CMTECH_Estagio.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        private static readonly string[] Ids = new[]
        {
            "Batata", "Pipoca", "Pizza", "Refrigerante", "Chocolate", "Uva", "Tomate", "Laranja", "Chiclete", "Banana"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Produto> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 20).Select(index => new Produto
            {
                Preco = rng.Next(20, 55),
                Id = Ids[rng.Next(Ids.Length)]
            })
            .ToArray();
        }
    }
}