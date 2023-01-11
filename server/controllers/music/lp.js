import LP from "../../models/music/lp.js";

/* CREATE */
export const createLP = async (req, res) => {
    try {
        const { artist, title, releaseDate } = req.body;
        const lpToAdd = new LP({
            artist,
            title,
            releaseDate
        })

        await lpToAdd.save();
        res.status(201).json({ message: "LP Successfully added."});

    } catch (err) {
        res.status(409).json({message: err.message})
    }
}

/* READ */
export const getAllLPs = async (req, res) => {
    try {
        const lp = await LP.find();
        res.status(200).json(lp);
    } catch (err) {
        res.status(404).json({ message: "No LPs exist!" });
    }
}

/* Get LP by artist and title */
export const getLP = async (req, res) => {
    try {
        const { artist, title } = req.params;
        const lpToFind = await LP.findOne({
            artist: artist,
            title: title
        }).exec();
            
        if (!lpToFind) return res.status(404).json({ error: "LP does not exist." });
        res.status(200).json(lpToFind);
        
    } catch (err) {
        res.status(404).json({ message: "LP does not exist." });
    }
}

/* UPDATE */
export const likeLP = async (req, res) => {
    try {
        const { id } = req.params;
        const lp = await LP.findById(id);
        lp.likes.set(1, true);
        const updateLP = await LP.findByIdAndUpdate(
            id,
            { likes: lp.likes },
            { new: true }
        );
        res.status(200).json(updateLP);
    } catch (err) {
        res.status(404).json({ message: "Cannot find LP." });
    }
}

/* UPDATEs LP details by id */
export const updateLP = async (req, res) => {
    try {
        const { id } = req.params;
        const { artist, title, releaseDate } = req.body;

        const updatedDetails = {
            artist: artist,
            title: title,
            releaseDate: releaseDate
        };

        const lp = await LP.findById(id);
        if (!lp) return res.status(404).json({ error: "Could not find LP." });

        await LP.updateOne({_id: id}, updatedDetails);
        await lp.save();

        res.status(200).json({ message: "LP updated." });
    } catch(err) {
        res.status(404).json({ error: "Could not find LP." });
    }
}

/* DELETE */
export const deleteLP = async (req, res) => {
    try {
        const { id } = req.params;
        const lp = await LP.findById(id);
        if (!lp) return res.status(400).json({ error: "Could not find LP." });
        const del = await LP.deleteOne({ _id: id });
        res.status(200).json(del); // Return object { n, ok, deletedCount } (Should all be == 1)
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}