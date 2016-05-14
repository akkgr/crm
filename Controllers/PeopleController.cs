using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Crm.Cinnamon.Models;
using MongoDB.Bson;
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
            var filter = new BsonDocument();
            return await db.People.Find(t=>true).ToListAsync();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
