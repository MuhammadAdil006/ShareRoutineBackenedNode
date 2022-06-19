

const index = (req, res) => {
    console.log("in index");
    const er = {
        firstName: undefined,
        lastName: undefined,
        password: undefined,
        email: undefined,
        Gender: undefined
    };
    console.log(er.firstname);
    const message=0;

    res.render('Index', { title: "home", er: er,message:message });
};


module.exports = { index };