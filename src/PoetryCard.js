import { AspectRatio, Card, CardContent, CardOverflow, Divider, Typography } from "@mui/joy";
 
export const PoetryCard = ( { date, poetry } ) => {
    
    return (
        <div>
            <Card
                color="primary"
                orientation="horizontal"
                variant="solid"
                invertedColors
                size="sm"
                sx={{
                    "--Card-padding": "20px",
                    "--Card-radius": "20px",
                    margin: "50px",
                }}
            >
                <CardOverflow>
                    <AspectRatio flex="true" sx={{ width: 100 }}>
                        <Typography textColor="success.plainDanger" sx={{ fontWeight: 'xl' }}>
                            {date}
                        </Typography>
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    <Typography textColor="success.plainDanger" sx={{ fontWeight: 'md' }}>
                        {poetry}
                    </Typography>
                </CardContent>
            </Card>
            <Divider />
        </div>
    )
}

export default PoetryCard;