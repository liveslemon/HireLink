export const createJob = (req, res) => {
  const { title, company } = req.body;

  res.status(201).json({
    message: "Job created",
    job: { title, company }
  });
};

export const getJobs = (req, res) => {
  res.json({
    message: "All jobs",
    jobs: []
  });
};