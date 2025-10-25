import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Tag,
} from "lucide-react";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [activeTab, setActiveTab] = useState("projects");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddProject, setShowAddProject] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    category: "",
    technologies: [],
    status: "draft",
  });

  // Dummy project data matching the homepage style
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Brand Identity for TechFlow",
      description:
        "Complete visual identity design including logo, color palette, and brand guidelines",
      image:
        "https://i.pinimg.com/736x/6f/64/2b/6f642bdaa051c8e3dfc0041d1c5219d5.jpg",
      category: "Brand Identity",
      technologies: ["Adobe Illustrator", "Figma", "Adobe Photoshop"],
      status: "published",
      date: "2024-12-15",
      views: 1250,
    },
    {
      id: 2,
      title: "E-Commerce UI/UX Design",
      description:
        "Modern and intuitive shopping experience with seamless user journey",
      image:
        "https://i.pinimg.com/736x/54/1e/b7/541eb7bfd04ffd74b77066c65f16b41f.jpg",
      category: "UI/UX Design",
      technologies: ["Figma", "Sketch", "Principle"],
      status: "published",
      date: "2024-12-10",
      views: 890,
    },
    {
      id: 3,
      title: "Corporate Website Redesign",
      description:
        "Professional website redesign that reflects company values and drives conversions",
      image:
        "https://i.pinimg.com/736x/e7/e5/5c/e7e55c5e297d2b6ab138419b07cfdec7.jpg",
      category: "Web Design",
      technologies: ["Figma", "Adobe XD", "Webflow"],
      status: "draft",
      date: "2024-12-08",
      views: 0,
    },
    {
      id: 4,
      title: "Mobile App Interface",
      description:
        "Clean and modern mobile application design with focus on user experience",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      category: "Mobile Design",
      technologies: ["Figma", "Sketch", "Framer"],
      status: "published",
      date: "2024-12-05",
      views: 1456,
    },
  ]);

  const categories = [
    "Brand Identity",
    "UI/UX Design",
    "Web Design",
    "Mobile Design",
    "Marketing Design",
    "Package Design",
  ];
  const techOptions = [
    "Figma",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Sketch",
    "Framer",
    "Webflow",
    "Adobe XD",
    "Principle",
  ];

  const handleAddProject = () => {
    if (newProject.title && newProject.description && newProject.category) {
      const project = {
        ...newProject,
        id: Date.now(),
        date: new Date().toISOString().split("T")[0],
        views: 0,
        image:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      };
      setProjects([project, ...projects]);
      setNewProject({
        title: "",
        description: "",
        category: "",
        technologies: [],
        status: "draft",
      });
      setShowAddProject(false);
    }
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const getStatusColor = (status) => {
    return status === "published"
      ? "text-green-400 bg-green-400/10"
      : "text-yellow-400 bg-yellow-400/10";
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // For now, just log in regardless of credentials
    setIsLoggedIn(true);
  };

  // Show login form if not logged in
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] text-white font-rubik px-4">
        <div className="w-full max-w-md">
          {/* Logo/Brand */}

          {/* Login Form */}
          <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">ADMIN</h2>

            <form onSubmit={handleLogin} className="space-y-4">
              <div></div>

              <div>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 focus:outline-none focus:border-dt-yellow/50 transition-colors font-inter"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-dt-yellow text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors mt-6"
              >
                SIGN IN
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col px-6 md:px-12 bg-[#050505] text-white font-rubik">
      {/* Header */}
      <div className="py-8 border-b border-stone-800">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-4xl md:text-5xl">ADMIN CONSOLE</h1>
            <p className="text-stone-400 mt-2 font-inter">
              Manage your portfolio projects
            </p>
          </div>
          <div className="text-right">
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-stone-400 text-sm hover:text-white transition-colors mt-1"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="py-6">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("projects")}
            className={`text-lg font-semibold pb-2 border-b-2 transition-colors ${
              activeTab === "projects"
                ? "text-dt-yellow border-dt-yellow"
                : "text-stone-400 border-transparent hover:text-white"
            }`}
          >
            PROJECTS
          </button>
        </div>
      </div>

      {/* Projects Section */}
      {activeTab === "projects" && (
        <div className="flex-1">
          {/* Projects Header & Actions */}
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-stone-900 border border-stone-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-dt-yellow/50 w-64"
                />
              </div>
              <button className="flex items-center gap-2 px-3 py-2 bg-stone-900 border border-stone-800 rounded-lg text-sm hover:border-stone-700 transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAddProject(true)}
              className="flex items-center gap-2 bg-dt-yellow text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              <Plus className="w-4 h-4" />
              ADD PROJECT
            </motion.button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-stone-900/50 rounded-lg border border-stone-800 hover:border-stone-700 transition-all group overflow-hidden"
              >
                {/* Project Image */}
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getStatusColor(project.status)}`}
                    >
                      {project.status.toUpperCase()}
                    </span>
                  </div>

                  <p className="text-stone-400 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mb-3 text-xs text-stone-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {project.views}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    <Tag className="w-3 h-3 text-stone-500" />
                    <span className="text-xs text-stone-400">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-stone-800 px-2 py-1 rounded text-stone-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-stone-500">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 px-3 py-1 bg-stone-800 rounded text-xs hover:bg-stone-700 transition-colors">
                      <Edit className="w-3 h-3" />
                      Edit
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 bg-stone-800 rounded text-xs hover:bg-stone-700 transition-colors">
                      <Eye className="w-3 h-3" />
                      View
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="flex items-center gap-1 px-3 py-1 bg-red-900/20 text-red-400 rounded text-xs hover:bg-red-900/30 transition-colors ml-auto"
                    >
                      <Trash2 className="w-3 h-3" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Project Modal */}
      {showAddProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">ADD NEW PROJECT</h2>
              <button
                onClick={() => setShowAddProject(false)}
                className="text-stone-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Title
                </label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) =>
                    setNewProject({ ...newProject, title: e.target.value })
                  }
                  className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 focus:outline-none focus:border-dt-yellow/50"
                  placeholder="Enter project title..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={newProject.description}
                  onChange={(e) =>
                    setNewProject({
                      ...newProject,
                      description: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 focus:outline-none focus:border-dt-yellow/50 resize-none"
                  placeholder="Project description..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Category
                </label>
                <select
                  value={newProject.category}
                  onChange={(e) =>
                    setNewProject({ ...newProject, category: e.target.value })
                  }
                  className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 focus:outline-none focus:border-dt-yellow/50"
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Technologies
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {techOptions.map((tech) => (
                    <label
                      key={tech}
                      className="flex items-center gap-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={newProject.technologies.includes(tech)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setNewProject({
                              ...newProject,
                              technologies: [...newProject.technologies, tech],
                            });
                          } else {
                            setNewProject({
                              ...newProject,
                              technologies: newProject.technologies.filter(
                                (t) => t !== tech,
                              ),
                            });
                          }
                        }}
                        className="rounded border-stone-700 bg-stone-800"
                      />
                      {tech}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Status</label>
                <select
                  value={newProject.status}
                  onChange={(e) =>
                    setNewProject({ ...newProject, status: e.target.value })
                  }
                  className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 focus:outline-none focus:border-dt-yellow/50"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowAddProject(false)}
                className="flex-1 px-4 py-2 border border-stone-700 rounded-lg hover:border-stone-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProject}
                className="flex-1 px-4 py-2 bg-dt-yellow text-black rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                Add Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
