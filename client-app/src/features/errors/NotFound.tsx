import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound(){
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name="search" />
                Content Not Found.
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities'>
                    Return To Activity Page.
                </Button>
            </Segment.Inline>
        </Segment>
    )
}