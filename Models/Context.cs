using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.IdGenerators;
using MongoDB.Bson.Serialization.Serializers;
using MongoDB.Driver;

namespace Crm.Cinnamon.Models
{
    public class Context
    {
        public IMongoClient Client { get; private set; }
        public IMongoDatabase Database { get; private set; }

        public Context()
        {
            var connectionString = "mongodb://localhost";
            Client = new MongoClient(connectionString);
            Database = Client.GetDatabase("crm");

            People = Database.GetCollection<Person>("people");
        }
        
        public IMongoCollection<Person> People { get; set; }

        public static void Init()
        {
            BsonClassMap.RegisterClassMap<Person>(cm =>
            {
                cm.AutoMap();
                cm.SetIdMember(cm.GetMemberMap(c => c.Id)
                    .SetSerializer(new StringSerializer(BsonType.ObjectId))
                    .SetIdGenerator(StringObjectIdGenerator.Instance));
            });
        }
    }
}
