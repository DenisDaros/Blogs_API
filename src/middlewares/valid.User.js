const validationEmail = async (req, res, next) => {
    const { email } = req.body;
    const autenticarEmail = /[a-z0-9._%+!$&*=^|~#%'`?{}/-]+@([a-z0-9-]+\.){1,}([a-z]{2,16})/;
    if (!autenticarEmail.test(email)) {
      return res.status(400).json({ 
        message: '"email" must be a valid email',
     });
    }
    next();
  };

  const validationDisplayName = async (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
      return res.status(400).json({ 
        message: '"displayName" length must be at least 8 characters long',
     });
    }
    next();
  };

  const validationPassword = async (req, res, next) => {
    const { password } = req.body;
    if (password.length < 6) {
     return res.status(400).json({ 
        message: '"password" length must be at least 6 characters long',
     });
    }
    next();
  };

  module.exports = {
    validationPassword,
    validationDisplayName,
    validationEmail,
  };