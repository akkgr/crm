﻿using System.Collections.Generic;

namespace Crm.Cinnamon.Models
{
    public class Person
    {
        public Person()
        {
            PersonInfos = new HashSet<PersonInfo>();
            Addresses = new HashSet<Address>();
            PersonTypes = new HashSet<PersonTypes>();
        }

        public string Id { get; set; }
        
        public ICollection<PersonTypes> PersonTypes { get; set; }

        public string LastName { get; set; }

        public string FirstName { get; set; }

        public string FullName { get { return string.Format("{0} {1}", LastName, FirstName); } }

        public ICollection<PersonInfo> PersonInfos { get; set; }
        
        public ICollection<Address> Addresses {get; set;}
    }
}
