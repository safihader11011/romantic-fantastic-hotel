import styled from 'styled-components';

const AmenitiesWrapper = styled.div`
  padding: 29px 0;

  .amenities_title {
    margin-bottom: 30px;
  }

  a {
    &:hover {
      color: #31b8bd;
    }
  }
`;

export const AmenitiesArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: -15px;

  > div {
    width: calc(100% / 4 - 10px);

    @media only screen and (max-width: 767px) {
      width: calc(100% / 3 - 10px);
      margin-bottom: 20px;
    }

    @media only screen and (max-width: 580px) {
      width: calc(100% / 2 - 10px);
      margin-bottom: 20px;
    }
  }

  > ul {
    list-style: none

    li {}
    li::before {
      font-family: "FontAwesome";
      font-size: 12px;
      content: "\f00c"; 
      color: #CE181E;
      display: inline-block; 
      width: 1em;
      margin-right: 5px;
    }
  }
`;

export default AmenitiesWrapper;
