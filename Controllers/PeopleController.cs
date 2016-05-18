using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Crm.Cinnamon.Models;
using MongoDB.Driver;

namespace Crm.Cinnamon.Controllers
{
    [Route("api/[controller]")]
    public class PeopleController : Controller
    {
        private readonly Context db;

        public PeopleController(Context ctx)
        {
            this.db = ctx;
        }

        // GET: api/values
        [HttpGet]
        public async Task<IEnumerable<Person>> Get()
        {
            return await db.People.Find(t => true).ToListAsync();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var obj = await db.People.Find(t => t.Id == id).FirstOrDefaultAsync();
            if (obj == null)
            {
                return NotFound();
            }
            return new OkObjectResult(obj);
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Person value)
        {
            await db.People.InsertOneAsync(value);
            return new OkObjectResult(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody]Person value)
        {
            var obj = await db.People.Find(t => t.Id == id).FirstOrDefaultAsync();
            if (obj == null)
            {
                return NotFound();
            }

            var query = Builders<Person>.Filter.Eq(e => e.Id, id);
            await db.People.ReplaceOneAsync(query, value);
            return new OkObjectResult(value);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await db.People.FindOneAndDeleteAsync(t => t.Id == id);
            return new OkResult();
        }
    }
}
