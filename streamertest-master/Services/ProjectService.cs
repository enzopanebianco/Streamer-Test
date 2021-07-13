using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SS_API.Model;
using SS_API.Data;
using Microsoft.EntityFrameworkCore;

namespace SS_API.Services
{
    public class ProjectService
    {
        private readonly StreamerContext _context;

        public ProjectService(StreamerContext context)
        {
            _context = context;
        }

        public List<Project> Index()
        {
                return _context.Projects.Include(x=>x.Course).ToList();
        }

        public void Create(Project project)
        {
                _context.Projects.Add(project);
                _context.SaveChanges();   
        }
        public Project GetProjectById(int projectId)
        {
            return _context.Projects.Where(x=>x.Id==projectId).Include(x => x.Course).FirstOrDefault();
        }
        public List<Project> GetProjectByCourseId(int courseId)
        {

            List<Project> projects = _context.Projects.Where(x => x.CourseId == courseId).Include(x => x.Course).ToList();
           
            return projects;
        }
        public void UpdateProject(Project project)
        {
                
                _context.Projects.Update(project);
                _context.SaveChanges();
        }

        public void DeleteProject(int id)
        {
            Project project = _context.Projects.Find(id);

            if (project != null)
            {
                _context.Projects.Remove(project);
                _context.SaveChanges();
            }

        }
    }
}
