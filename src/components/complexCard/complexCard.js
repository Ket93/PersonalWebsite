import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./complexCard.css";
import Language from ".././language/language.js";

class ComplexCard extends Component {

    render() {

        const { image, title, description, languages } = this.props;


        return (
            <Card className="cardContainer" sx={{ maxWidth: 380 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="230"
                    image={image}
                    className="complexCardImg"
                />
                <CardContent id="cardTextContainer">
                    <Typography id="cardHeader" gutterBottom variant="h5" >
                        {title}
                    </Typography>
                    <Typography className="cardDescription" variant="body2" >
                        {description}
                    </Typography>
                </CardContent>
                <CardActions className="buttonsContainer">
                    {languages.map(function (language, index) {
                        return <Language key={index} language={language}></Language>;
                    })}
                </CardActions>
            </Card>
        );
    }
}

export default ComplexCard;
