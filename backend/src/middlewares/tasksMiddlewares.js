export  function validadeFieldTitle(req, res, next){
    const {body} = req;

    if(body.title === undefined){
        return res.status(400).json({message: 'The field title is require'})
    }
    if(body.title === ''){
        return res.status(400).json({message: 'Title cannot be empty'})
    }
    next();
};

export function validadeFieldStatus(req, res, next){
    const {body} = req;

    if(body.status === undefined){
        return res.status(400).json({message: 'The field Status is require'})
    }
    if(body.status === ''){
        return res.status(400).json({message: 'Status cannot be empty'})
    }
    next();
};