export default {
  name: "current_jobs",
  title: "Current Job Openings",
  type: "document",
  fields: [
    {
      name: "position_name",
      title: "Position Name",
      type: "string",
    },
    {
      name: "short_description",
      title: "Short_Description",
      description:"keep it short with 7 to 10 words",
      type: "string",
    },
    {
      name: "Complete_description",
      title: "Complete_Description",
      type: "string",
    }
  ],
};
