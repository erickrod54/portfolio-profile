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
         SpinInside, Backdrop, CardBorder,GhIcon, Icon, Repo } from '../styled-components/styled.components.index'

/**Portfolio-erick - version 37.04 - GitFlowComponent - Features:
 * 
 *      --> Migrating 'PrText'      
 * 
 * Notes: 'HiddenCheckbox' is the actual input
 * 
*/

const PrTitle = styled.div`
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
    color: #4493f8;
    }

`

const PrDesc = styled.div`
    padding-left: 2px;
    font-size: 10px;
    color: #797d86;
`

const Pr = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    outline: 1px solid #343539;
    padding: 8px;
`

const PrsBox = styled.div`
    margin: 12px;
    height: calc(100% - 24px);
    display: flex;
    flex-direction: column;
    gap: 1px;
    border: 1px solid #343539;
    border-radius: 6px;
    overflow: auto;

    &::-webkit-scrollbar {
    width: 0;
    }

`

const ContentBox = styled.div`
    height: 100%;
    overflow: hidden;
`

const HeaderBox = styled.div`
    background: #0b0d10;
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-bottom: 1px solid #1d1f23;
`

const GitFlowCardBox = styled.div`
    position: absolute;
    inset: 0.125em;
    border-radius: 0.875em;
    background: #111215;
    display: flex;
    flex-direction: column;
    color: #fff;
    overflow: hidden;
`

const GitFlowWrapper = styled.div`


`

export const burgerMenuData = [
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
    width: '16',
    height: '16',
  },
  {
    fill: '',
    d: 'M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z'
  },
];

const ghIconData = [
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: '24',
    height: '24',
  },
  {
    fill: '#F5F5F5',
    d: 'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'
  },
];

const sourceControlData = [
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
    width: '16',
    height: '16',
  },
  {
    fill: '',
    d: 'M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'
  },
];

const notificationsData = [
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
    width: '16',
    height: '16',
  },
  {
    fill: '',
    d: 'M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z'
  },
];

const codeData = [
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
    width: '16',
    height: '16',
  },
  {
    fill: '',
    d: 'm11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z'
  },
];

const issuesData = [
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
    width: '16',
    height: '16',
  },
  {
    fill: '',
    d: 'M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
  } ,
  {
    fill: '',
    d: 'M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z'
  }
];

const prData = [
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
    width: '16',
    height: '16',
  },
  {
    fill: '',
    d: 'M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'
  } ,
];

const firstPrData = [
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
    width: '16',
    height: '16',
  },
  {
    fill: '',
    d: 'M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'
  } ,
];

const secondPrData = [
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
    width: '16',
    height: '16',
  },
  {
    fill: '',
    d: 'M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'
  } ,
];

const thirdPrData = [
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
    width: '16',
    height: '16',
  },
  {
    fill: '',
    d: 'M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'
  } ,
];

const fourthPrData = [
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
    width: '16',
    height: '16',
  },
  {
    fill: '',
    d: 'M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'
  } ,
];

const fifthPrData = [
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
    width: '16',
    height: '16',
  },
  {
    fill: '',
    d: 'M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'
  } ,
];

const sixthPrData = [
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
    width: '16',
    height: '16',
  },
  {
    fill: '',
    d: 'M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'
  } ,
];

const PrMessages = [
{
  title:'Feature request: Document analysis',
  description:'#5054 opened 1 minute ago by zkhomeny'
}, 
{
  title:'Store markup as JSON',
  description:'#5038 opened 3 hours ago by goldfish'
}, 
{
  title:'[Bug fix]: Various improvements',
  description:'#4969 opened 3 days ago by xX_druidLord_Xx'
}, 
{
  title:'Feature request: Storage of cats',
  description:'#4931 opened 12 days ago by helmetx10'
}, 
{
  title:'Bug: four repeated names of PRs',
  description:'#4869 opened 1 month ago by bluefish'
}, 
{
  title:'Improve documentation',
  description:'#4206 opened 2 months ago by goldfish'
},
]

const HeaderData = [
  {
    path:'sms'
  },
  {
    path:'my-api'
  }
]

const TabsTitles = [
  {
    title:'Code'  
  },
  {
    title:'Issues'  
  },
  {
    title:'Pull Requests'  
  }

]

const GitFlowComponent = () => {

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