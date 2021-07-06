using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;


namespace SS_API.Model
{
    public class Course
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        
    }
}