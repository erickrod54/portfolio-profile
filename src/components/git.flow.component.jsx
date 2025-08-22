import { useState } from "react";
import styled, { css } from "styled-components";
import { IconComponent } from './index.components';
import { CardContainer,
         SpinBlur,
         SpinIntense,
         RepoOwner,
         RepoSlash,
         RepoName,
         Space,
         Pfp,
         TopHeader,
         TabIcon,
         TabText,
         TabStyled,
         BtmHeader,
         HiddenCheckbox,
         StyledCheckbox,
         CheckboxWrapper,
         PrIcon,
         PrText,
         PrTitle,
         PrDesc,
         Pr,
         PrsBox,
         ContentBox,
         HeaderBox,
         GitFlowCardBox,
         GitFlowWrapper,
         SpinInside, Backdrop, CardBorder,GhIcon, Icon, Repo } from '../styled-components/styled.components.index';
import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 38.17 - GitFlowComponent - Features:
 * 
 *      --> Clearing local 'TabsTitles'      
 * 
 * Notes: 'HiddenCheckbox' is the actual input
 * 
*/

const GitFlowComponent = () => {

    const { burgerMenuData,
            ghIconData,
            sourceControlData,
            notificationsData,
            secondPrData,
            thirdPrData,
            fourthPrData,
            fifthPrData,
            sixthPrData,
            PrMessages,
            HeaderData,
            TabsTitles,
            codeData, issuesData, prData, firstPrData } = usePortfolioContext()

    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2 ] = useState(false);
    const [checked3, setChecked3 ] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);

    const [
           { title: firstTitle, description: firstDescription },
           { title:secondTitle, description:secondDescription },
           { title:thirdTitle, description:thirdDescription },
           { title: fourthTitle, description:fourthDescription },
           {title: fifthTitle, description: fifthDescription },
           {title:sixthTitle, description:sixthDescription }
          ] = PrMessages;

    const [{ path:firstPath }, { path:secondPath }] = HeaderData;

    const [{ title: tab_title_1 },{ title: tab_title_2 },{ title: tab_title_3 }] = TabsTitles;

    return(
        <GitFlowWrapper>
        <svg style={{position: 'absolute', width: 0, height: 0}}>
        <filter id="unopaq" y="-100%" height="300%" x="-100%" width="300%">
            <feColorMatrix
            values="1 0 0 0 0 
                    0 1 0 0 0 
                    0 0 1 0 0 
                    0 0 0 5 0"
            ></feColorMatrix>
        </filter>
        <filter id="unopaq2" y="-100%" height="300%" x="-100%" width="300%">
            <feColorMatrix
            values="1 0 0 0 0 
                    0 1 0 0 0 
                    0 0 1 0 0 
                    0 0 0 10 0"
            ></feColorMatrix>
        </filter>
        <filter id="unopaq3" y="-100%" height="300%" x="-100%" width="300%">
            <feColorMatrix
            values="1 0 0 1 0 
                    0 1 0 1 0 
                    0 0 1 1 0 
                    0 0 0 2 0"
            ></feColorMatrix>
        </filter>
        </svg>
        <CardContainer>
        <SpinBlur />
        <SpinIntense />
        <Backdrop />
        <CardBorder>
            <SpinInside />
        </CardBorder>
        <GitFlowCardBox>
            <HeaderBox>
                <TopHeader>
                    {/**burger menu */}
                    <Icon>
                        <IconComponent data={burgerMenuData} />
                    </Icon>
                    {/**gh icon */}
                    <GhIcon>
                        <IconComponent data={ghIconData} />
                    </GhIcon>
                    <Repo>
                        <RepoOwner href="/#">{firstPath}</RepoOwner>
                        <RepoSlash>/</RepoSlash>
                        <RepoName href="/#">{secondPath}</RepoName>
                    </Repo>
                    <Space></Space>
                    <Icon>
                        {/**source control */}
                        <IconComponent data={sourceControlData} />
                    </Icon>
                    <Icon>
                        {/**notifications */}
                        <IconComponent data={notificationsData} />
                    </Icon>
                    <Pfp></Pfp>
                </TopHeader>
                <BtmHeader>
                    <TabStyled>
                    <TabIcon>
                        {/**Code icon */}
                        <IconComponent data={codeData} />
                    </TabIcon>
                    <TabText>{tab_title_1}</TabText>
                    </TabStyled>
                    <TabStyled>
                    <TabIcon>
                        {/**Issues Icon */}
                        <IconComponent data={issuesData} />
                    </TabIcon>
                    <TabText>{tab_title_2}</TabText>
                    </TabStyled>
                    <TabStyled active>
                    <TabIcon>
                        {/**Pull Request data */}
                        <IconComponent data={prData} />
                    </TabIcon>
                    <TabText>{tab_title_3}</TabText>
                    </TabStyled>
                </BtmHeader>
            </HeaderBox>
            <ContentBox>
            <PrsBox>
                <Pr>
                    <CheckboxWrapper>
                        <HiddenCheckbox 
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                        />
                        <StyledCheckbox checked={checked}></StyledCheckbox>
                    </CheckboxWrapper>
                    <PrIcon>
                        {/**first pr icon */}
                        <IconComponent data={firstPrData} />
                    </PrIcon>
                    <PrText>
                        <PrTitle>{firstTitle}</PrTitle>
                        <PrDesc>{firstDescription}</PrDesc>
                    </PrText>
                </Pr>
                <Pr>
                    <CheckboxWrapper>
                        <HiddenCheckbox
                            checked={checked2}
                            onChange={() => setChecked2(!checked2)}
                        />
                        <StyledCheckbox checked={checked2}></StyledCheckbox>
                    </CheckboxWrapper>
                    <PrIcon>
                        {/**second pr icon */}
                        <IconComponent data={secondPrData} />
                    </PrIcon>
                    <PrText>
                        <PrTitle>{secondTitle}</PrTitle>
                        <PrDesc>{secondDescription}</PrDesc>
                    </PrText>
                </Pr>
                <Pr>
                    <CheckboxWrapper>
                        <HiddenCheckbox 
                            checked={checked3}
                            onChange={() => setChecked3(!checked3)}
                        />
                        <StyledCheckbox checked={checked3}></StyledCheckbox>
                    </CheckboxWrapper>
                    <PrIcon>
                        {/**third pr icon */}
                        <IconComponent data={thirdPrData} />
                    </PrIcon>
                    <PrText>
                        <PrTitle>{thirdTitle}</PrTitle>
                        <PrDesc>
                        {thirdDescription}
                        </PrDesc>
                    </PrText>
                </Pr>
                <Pr>
                    <CheckboxWrapper>
                        <HiddenCheckbox
                            checked={checked4}
                            onChange={() => setChecked4(!checked4)}
                        />
                        <StyledCheckbox checked={checked4}></StyledCheckbox>
                    </CheckboxWrapper>
                    <PrIcon>
                        {/**fourth pr icon */}
                        <IconComponent data={fourthPrData}/>
                    </PrIcon>
                    <PrText>
                        <PrText>{fourthTitle}</PrText>
                        <PrDesc>{fourthDescription}</PrDesc>
                    </PrText>
                </Pr>
                <Pr>
                    <CheckboxWrapper>
                        <HiddenCheckbox 
                            checked={checked5}
                            onChange={() => setChecked5(!checked5)}
                        />
                        <StyledCheckbox checked={checked5}></StyledCheckbox>
                    </CheckboxWrapper>
                    <PrIcon>
                        {/**fifth pr icon */}
                        <IconComponent data={fifthPrData} />
                    </PrIcon>
                    <PrText>
                        <PrTitle>
                          {fifthTitle}
                        </PrTitle>
                        <PrDesc>{fifthDescription}</PrDesc>
                    </PrText>
                </Pr>
                <Pr>
                    <CheckboxWrapper>
                        <HiddenCheckbox 
                            checked={checked6}
                            onChange={() => setChecked6(!checked6)}
                        />
                        <StyledCheckbox checked={checked6}></StyledCheckbox>
                    </CheckboxWrapper>
                    <PrIcon>
                        {/**sixth pr icon */}
                        <IconComponent data={sixthPrData} />
                    </PrIcon>
                    <PrText>
                        <PrTitle>{sixthTitle}</PrTitle>
                        <PrDesc>{sixthDescription}</PrDesc>
                    </PrText>
                </Pr>
            </PrsBox>
            </ContentBox>
        </GitFlowCardBox>
        </CardContainer>
        </GitFlowWrapper>
    )

}

export default GitFlowComponent;