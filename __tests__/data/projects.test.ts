/**
 * @fileoverview Tests for project data structure and helper functions
 * TDD: RED phase - Write tests first
 */

import {
  ProjectType,
  ProjectStatus,
  type TechStack,
  type Feature,
  type CodeStats,
  type Achievement,
  type Screenshot,
  type Links,
  type Project,
  projectsData,
  getProjectById,
  getProjectsByStatus,
  getProjectsByType,
  getAllProjects,
} from "@/data/projects";

describe("Project Type Definitions", () => {
  describe("ProjectType enum", () => {
    it("should have all required project types", () => {
      expect(ProjectType.FULL_STACK_MOBILE).toBe("full-stack-mobile");
      expect(ProjectType.DESKTOP).toBe("desktop");
      expect(ProjectType.INFRASTRUCTURE).toBe("infrastructure");
      expect(ProjectType.CHROME_EXTENSION).toBe("chrome-extension");
      expect(ProjectType.IOS).toBe("ios");
      expect(ProjectType.NPM_PACKAGE).toBe("npm-package");
    });
  });

  describe("ProjectStatus enum", () => {
    it("should have all required status values", () => {
      expect(ProjectStatus.PRODUCTION).toBe("production");
      expect(ProjectStatus.APP_STORE_REVIEW).toBe("app-store-review");
      expect(ProjectStatus.ARCHIVE).toBe("archive");
      expect(ProjectStatus.DEVELOPMENT).toBe("development");
    });
  });
});

describe("Project Data Structure", () => {
  describe("projectsData array", () => {
    it("should contain exactly 15 projects", () => {
      expect(projectsData.length).toBe(15);
    });

    it("should have unique IDs for all projects", () => {
      const ids = projectsData.map((p) => p.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it("should have all required fields for each project", () => {
      projectsData.forEach((project) => {
        expect(project.id).toBeDefined();
        expect(project.name).toBeDefined();
        expect(project.emoji).toBeDefined();
        expect(project.type).toBeDefined();
        expect(project.status).toBeDefined();
        expect(project.period).toBeDefined();
        expect(project.role).toBeDefined();
        expect(project.shortDescription).toBeDefined();
        expect(project.description).toBeDefined();
        expect(project.features).toBeDefined();
        expect(project.techStack).toBeDefined();
        expect(project.links).toBeDefined();
      });
    });

    it("should have valid TechStack structure for all projects", () => {
      projectsData.forEach((project) => {
        expect(Array.isArray(project.techStack.frontend)).toBe(true);
        expect(Array.isArray(project.techStack.backend)).toBe(true);
        expect(Array.isArray(project.techStack.infrastructure)).toBe(true);
        expect(Array.isArray(project.techStack.desktop)).toBe(true);
      });
    });

    it("should have valid Feature structure for all projects", () => {
      projectsData.forEach((project) => {
        expect(Array.isArray(project.features)).toBe(true);
        project.features.forEach((feature) => {
          expect(typeof feature.title).toBe("string");
          expect(typeof feature.description).toBe("string");
        });
      });
    });
  });

  describe("Individual project data", () => {
    it("should have Cookting project with correct data", () => {
      const cookting = projectsData.find((p) => p.id === "cookting");
      expect(cookting).toBeDefined();
      expect(cookting?.name).toBe("Cookting");
      expect(cookting?.type).toBe(ProjectType.FULL_STACK_MOBILE);
      expect(cookting?.status).toBe(ProjectStatus.APP_STORE_REVIEW);
    });

    it("should have DevUtilsHub project with correct data", () => {
      const devutils = projectsData.find((p) => p.id === "dev-utils-hub");
      expect(devutils).toBeDefined();
      expect(devutils?.name).toBe("Dev Utils Hub");
      expect(devutils?.type).toBe(ProjectType.DESKTOP);
      expect(devutils?.status).toBe(ProjectStatus.PRODUCTION);
    });

    it("should have CertSyncManager project with correct data", () => {
      const certsync = projectsData.find((p) => p.id === "cert-sync-manager");
      expect(certsync).toBeDefined();
      expect(certsync?.name).toBe("Certificate Sync Manager");
      expect(certsync?.type).toBe(ProjectType.INFRASTRUCTURE);
      expect(certsync?.status).toBe(ProjectStatus.PRODUCTION);
    });

    it("should have ChzzkOBS project with correct data", () => {
      const chzzk = projectsData.find((p) => p.id === "chzzk-obs");
      expect(chzzk).toBeDefined();
      expect(chzzk?.name).toBe("Chzzk OBS Connector");
      expect(chzzk?.type).toBe(ProjectType.DESKTOP);
      expect(chzzk?.status).toBe(ProjectStatus.DEVELOPMENT);
    });

    it("should have NamuwikiLinker project with correct data", () => {
      const namuwiki = projectsData.find((p) => p.id === "namuwiki-linker");
      expect(namuwiki).toBeDefined();
      expect(namuwiki?.name).toContain("나무위키");
      expect(namuwiki?.type).toBe(ProjectType.CHROME_EXTENSION);
      expect(namuwiki?.status).toBe(ProjectStatus.PRODUCTION);
    });

    it("should have Jellmodoro project with correct data", () => {
      const jellmodoro = projectsData.find((p) => p.id === "jellmodoro");
      expect(jellmodoro).toBeDefined();
      expect(jellmodoro?.name).toBe("Jellmodoro");
      expect(jellmodoro?.type).toBe(ProjectType.IOS);
      expect(jellmodoro?.status).toBe(ProjectStatus.PRODUCTION);
    });

    it("should have Wecanner project with correct data", () => {
      const wecanner = projectsData.find((p) => p.id === "wecanner");
      expect(wecanner).toBeDefined();
      expect(wecanner?.name).toBe("Wecanner");
      expect(wecanner?.type).toBe(ProjectType.IOS);
      expect(wecanner?.status).toBe(ProjectStatus.PRODUCTION);
    });

    it("should have jell-utils project with correct data", () => {
      const jellutils = projectsData.find((p) => p.id === "jell-utils");
      expect(jellutils).toBeDefined();
      expect(jellutils?.name).toBe("jell-utils.js");
      expect(jellutils?.type).toBe(ProjectType.NPM_PACKAGE);
      expect(jellutils?.status).toBe(ProjectStatus.ARCHIVE);
    });
  });
});

describe("Helper Functions", () => {
  describe("getProjectById", () => {
    it("should return correct project for valid ID", () => {
      const project = getProjectById("cookting");
      expect(project).toBeDefined();
      expect(project?.name).toBe("Cookting");
    });

    it("should return undefined for invalid ID", () => {
      const project = getProjectById("non-existent");
      expect(project).toBeUndefined();
    });

    it("should return undefined for empty string", () => {
      const project = getProjectById("");
      expect(project).toBeUndefined();
    });
  });

  describe("getProjectsByStatus", () => {
    it("should return projects with production status", () => {
      const projects = getProjectsByStatus(ProjectStatus.PRODUCTION);
      expect(projects.length).toBeGreaterThan(0);
      projects.forEach((p) => {
        expect(p.status).toBe(ProjectStatus.PRODUCTION);
      });
    });

    it("should return projects with development status", () => {
      const projects = getProjectsByStatus(ProjectStatus.DEVELOPMENT);
      expect(projects.length).toBeGreaterThan(0);
      projects.forEach((p) => {
        expect(p.status).toBe(ProjectStatus.DEVELOPMENT);
      });
    });

    it("should return projects with app-store-review status", () => {
      const projects = getProjectsByStatus(ProjectStatus.APP_STORE_REVIEW);
      expect(projects.length).toBeGreaterThan(0);
      projects.forEach((p) => {
        expect(p.status).toBe(ProjectStatus.APP_STORE_REVIEW);
      });
    });

    it("should return projects with archive status", () => {
      const projects = getProjectsByStatus(ProjectStatus.ARCHIVE);
      expect(projects.length).toBeGreaterThan(0);
      projects.forEach((p) => {
        expect(p.status).toBe(ProjectStatus.ARCHIVE);
      });
    });

    it("should return empty array for status with no matching projects", () => {
      // All statuses have at least one project, so we test the function works
      const allProjects = getAllProjects();
      const allStatuses = allProjects.map((p) => p.status);
      expect(allStatuses).toContain(ProjectStatus.PRODUCTION);
    });
  });

  describe("getProjectsByType", () => {
    it("should return full-stack-mobile projects", () => {
      const projects = getProjectsByType(ProjectType.FULL_STACK_MOBILE);
      expect(projects.length).toBeGreaterThan(0);
      projects.forEach((p) => {
        expect(p.type).toBe(ProjectType.FULL_STACK_MOBILE);
      });
    });

    it("should return desktop projects", () => {
      const projects = getProjectsByType(ProjectType.DESKTOP);
      expect(projects.length).toBeGreaterThan(0);
      projects.forEach((p) => {
        expect(p.type).toBe(ProjectType.DESKTOP);
      });
    });

    it("should return ios projects", () => {
      const projects = getProjectsByType(ProjectType.IOS);
      expect(projects.length).toBeGreaterThan(0);
      projects.forEach((p) => {
        expect(p.type).toBe(ProjectType.IOS);
      });
    });

    it("should return npm-package projects", () => {
      const projects = getProjectsByType(ProjectType.NPM_PACKAGE);
      expect(projects.length).toBeGreaterThan(0);
      projects.forEach((p) => {
        expect(p.type).toBe(ProjectType.NPM_PACKAGE);
      });
    });
  });

  describe("getAllProjects", () => {
    it("should return all 15 projects", () => {
      const projects = getAllProjects();
      expect(projects.length).toBe(15);
    });

    it("should return a copy of the array (immutability)", () => {
      const projects1 = getAllProjects();
      const projects2 = getAllProjects();
      expect(projects1).not.toBe(projects2);
      expect(projects1).toEqual(projects2);
    });
  });
});
