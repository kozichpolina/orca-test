import React, { useState } from 'react';

import * as styleVars from '../../global-styles/variables.js';

import { iconTypes } from '../Icon'
import { Button, ButtonText } from '../Button';
import { Heading } from '../typo/Heading';
import { Text } from '../typo/Text';
import { ListItem } from '../List/ListItem';

export const CardComponent = ({
    className,
    onModalOpen
}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className={className}>
          <CardComponent.Header>
              <CardComponent.Icon inverse
                    type={iconTypes.exclaminationTriangle}
                    size={styleVars.iconSize.sl}
              />
              <Heading.h3>Data at risk</Heading.h3>
              <CardComponent.Dots
                  icon={iconTypes.dotsVertical}
                  ariaLabel="Open Context Menu"
                  onClick={()=>{setIsOpen(true)}}
              />
              {
                  isOpen &&
                  <CardComponent.MenuContext onClose={()=>{setIsOpen(false)}}>
                      <ButtonText icon={iconTypes.files}>Duplicate</ButtonText>
                      <ButtonText icon={iconTypes.pencil}>Edit</ButtonText>
                      <ButtonText icon={iconTypes.trash}>Delete</ButtonText>
                  </CardComponent.MenuContext>
              }
              </CardComponent.Header>
          <CardComponent.Body>
              <CardComponent.Meta>
                  <dt>
                      <Text.span>Name</Text.span>
                  </dt>
                  <dd>
                      <Text.span secondary overflow='ellipsis'>orca-demo-bucket-db</Text.span>
                  </dd>
                  <dt>
                      <Text.span>Type</Text.span>
                  </dt>
                  <dd>
                      <Text.span secondary overflow='ellipsis'>AWS S3 Bucket</Text.span>
                  </dd>
                  <dt>
                      <Text.span>Tests</Text.span>
                  </dt>
                  <CardComponent.List gap={styleVars.space.sxs}>
                      <ListItem>
                          <Text.span secondary overflow='ellipsis'>ec2-14175-131-61.coec2-14175-131-61</Text.span>
                          <Text.span>118 / 120</Text.span>
                      </ListItem>
                      <ListItem>
                          <Text.span secondary overflow='ellipsis'>7fe00efc-8cfc-4454</Text.span>
                          <Text.span>7 / 10</Text.span>
                      </ListItem>
                  </CardComponent.List>
              </CardComponent.Meta>
          </CardComponent.Body>
          <CardComponent.Footer>
              <Button primary onClick={onModalOpen}>Open modal</Button>
          </CardComponent.Footer>
      </div>
  );
}