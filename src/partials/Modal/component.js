import React from 'react';

import * as styleVars from '../../global-styles/variables';

import { List } from '../List';
import { ListItem } from '../List/ListItem';
import { Button, ButtonIcon } from '../Button';
import { Text } from '../typo/Text';
import { Box } from '../Box';
import { iconTypes } from '../Icon';
import { Heading } from '../typo/Heading';
import { Checkbox } from '../Inputs/Checkbox';

export const ModalComponent = ({
        className,
        onModalClose
    }) => {

    return (
        <React.Fragment>
            <aside className={className}>
                <ModalComponent.Header>
                    <Heading.h2>Lorem ipsum dolor sit amet</Heading.h2>
                    <ButtonIcon
                        icon={iconTypes.cross}
                        size={styleVars.fontSize.base}
                        ariaLabel="Close"
                        onClick={onModalClose}
                    />
                </ModalComponent.Header>
                <ModalComponent.Form>
                    <ModalComponent.FormBody>

                    <Text mb={styleVars.space.sl}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc gravida cursus nibh, sit amet varius purus lacinia at.
                        Quisque tincidunt efficitur tempor. Proin pellentesque dictum
                        mauris sed lobortis. Etiam nec mollis elit. Fusce et lacus
                        tincidunt sem commodo condimentum et id lectus.
                    </Text>
                    <Text mb={styleVars.space.sl}>
                        Curabitur in pharetra ante. Aliquam in neque tristique,
                        fermentum elit dignissim, laoreet lacus. Praesent viverra
                        erat enim. Praesent quis ante rutrum, lacinia tortor ut,
                        efficitur dolor. Pellentesque vehicula tempus neque, ac
                        ornare libero tempor placerat.
                    </Text>
                    <Box mb={styleVars.space.sl}>
                        <List direction="column" gap={styleVars.space.ss}>
                            <ListItem>
                                <Checkbox label="Quisque tincidunt efficitur tempor" id="1" fontSize={styleVars.fontSize.bodyM}/>
                            </ListItem>
                            <ListItem>
                                <Checkbox label="Proin pellentesque dictum mauris sed lobortis" id="2" fontSize={styleVars.fontSize.bodyM}/>
                            </ListItem>
                            <ListItem>
                                <Checkbox label="Etiam nec mollis elit" id="3" fontSize={styleVars.fontSize.bodyM}/>
                            </ListItem>
                        </List>
                    </Box>
                    <Text fontSize={styleVars.fontSize.bodyS} mb={styleVars.space.sm}>
                        Curabitur in pharetra ante. Aliquam in neque tristique,
                        fermentum elit dignissim, laoreet lacus. Praesent viverra
                        erat enim. Praesent quis ante rutrum, lacinia tortor ut,
                        efficitur dolor. Pellentesque vehicula tempus neque, ac
                        ornare libero tempor placerat.
                    </Text>
                    <Text fontSize={styleVars.fontSize.bodyS} mb={styleVars.space.sm}>
                        Curabitur in pharetra ante. Aliquam in neque tristique,
                        fermentum elit dignissim, laoreet lacus. Praesent viverra
                        erat enim. Praesent quis ante rutrum, lacinia tortor ut,
                        efficitur dolor. Pellentesque vehicula tempus neque, ac
                        ornare libero tempor placerat.
                    </Text>

                    <List direction="row" gap={styleVars.space.sl}>
                        <ListItem>
                            <Checkbox label="Efficitur" id="4"/>
                        </ListItem>
                        <ListItem>
                            <Checkbox label="Lacinia" id="5"/>
                        </ListItem>
                        <ListItem>
                            <Checkbox label="Lacinia" id="6"/>
                        </ListItem>
                    </List>
                    </ModalComponent.FormBody>

                    <ModalComponent.FormFooter>
                        <List gap={styleVars.space.sl} direction="row">
                            <ListItem>
                                <Button>Cancel</Button>
                            </ListItem>
                            <ListItem>
                                <Button primary>Accept</Button>
                            </ListItem>
                        </List>
                    </ModalComponent.FormFooter>
                </ModalComponent.Form>
            </aside>
            <ModalComponent.Overlay/>
        </React.Fragment>
    );
}