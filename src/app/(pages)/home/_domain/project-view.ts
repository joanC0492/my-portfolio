import type { IDataProjects, IProjectPageImage } from "./portfolio.interface";

type ProjectDestination = Pick<
  IDataProjects,
  "viewMode" | "publicUrl" | "link" | "pageLink" | "pageImage"
>;

export const isValidPageImage = (
  image?: IProjectPageImage
): image is IProjectPageImage =>
  Boolean(
    image?.src?.trim() &&
      image.src.startsWith("/") &&
      !image.src.startsWith("//") &&
      Number.isInteger(image.width) &&
      image.width > 0 &&
      Number.isInteger(image.height) &&
      image.height > 0
  );

export const getProjectUrl = (project: ProjectDestination): string | null => {
  if (project.viewMode === "external") {
    const url = (project.publicUrl || project.link)?.trim();
    if (!url) return null;

    try {
      const parsed = new URL(url);
      return ["http:", "https:"].includes(parsed.protocol) ? url : null;
    } catch {
      return null;
    }
  }

  if (
    project.viewMode === "image" &&
    project.pageLink?.trim() &&
    isValidPageImage(project.pageImage)
  ) {
    return `/portafolio/${project.pageLink}`;
  }

  return null;
};
