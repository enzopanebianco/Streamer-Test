using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SS_API.Model;
using SS_API.Data;
using Microsoft.EntityFrameworkCore;

namespace SS_API.Services
{
    public class CourseService
    {
        private readonly StreamerContext _context;

        public CourseService(StreamerContext context)
        {
            _context = context;
        }
//Lista de cursos usada para cadastrar os projetos
        public List<Course> Index()
        {
            return _context.Courses.ToList();
        }
    }
}
