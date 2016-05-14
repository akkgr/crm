
namespace Crm.Cinnamon.Models
{
    public class Address
    {
        public string AddressType { get; set; }

        public string Area { get; set; }

        public string Street { get; set; }

        public string StreetNumber { get; set; }

        public string PostalCode { get; set; }

        public double Lat { get; set; }

        public double Lng { get; set; }

        public string Title
        {
            get
            {
                return string.Format("{1} {2}, {0} {3}", Area, Street, StreetNumber, PostalCode);
            }
        }
    }
}
