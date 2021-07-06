using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SS_API.Model {

    public class Project {
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]   
        public int Id { get;set;}

        [Column(TypeName = "varchar(150)")]
        [Required]
        public string Name { get; set; }

        [Column(TypeName ="varchar(150)")]
        public string Image { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string What { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string Why { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string WhatWillWeDo { get; set; }

        //Usei integer para o status do projeto
        [Column(TypeName ="varchar(150)")]
        public int ProjectStatus { get; set; }
        
        [Required]
        public int CourseId { get; set; }

       
        [ForeignKey("CourseId")]
        public Course Course { get; set; }


        



    }

}
