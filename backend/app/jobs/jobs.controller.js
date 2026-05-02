export const createJob = (req, res) => {
  const { title, company, description } = req.body;

  res.status(201).json({
    message: "Job created",
    job: { title, company, description }
  });
};

export const getJobs = (req, res) => {
  res.json({
    message: "All jobs",
    jobs: []
  });
};