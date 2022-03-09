import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import FolderPlus from '../../../../assets/svg/folder-plus.svg';
import Upload from '../../../../assets/svg/upload.svg';
import Mail from '../../../../assets/svg/mail.svg';
import Left from '../../../../assets/svg/left.svg';
import Right from '../../../../assets/svg/rigth.svg';
import ProfileCard from '../../../../components/ProfileCard';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { actions, selectors } from '../../../../store';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 60px;
`;

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const H2 = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
  &:active {
    opacity: 50%;
  }
`;

const Body = styled.div`
  background-color: #f9f9f9;
  height: calc(100vh - 80px - 86px);
`;

const ButtonsPanel = styled.div`
  display: flex;
  flex-direction: row;
`;

const RowOrList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const List = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const dataCompanies = useAppSelector(selectors.companies.selectCompanies);

  const getSaved = async (numberPage: number) => {
    const res = await dispatch(
      actions.companies.getCompanies({ pages: numberPage, limit: 12 }),
    );
    setIsLoading(false);
  };

  const nexPage = async (currentPage: number) => {
    if ((currentPage === 1 || currentPage === 2) && !isLoading) {
      setIsLoading(true);
      await getSaved(currentPage + 1);
      setPage(currentPage + 1);
      setIsLoading(false);
    }
  };

  const prevPage = async (currentPage: number) => {
    console.log(`currentPage`, currentPage);
    if ((currentPage === 2 || currentPage === 3) && !isLoading) {
      setIsLoading(true);
      await getSaved(currentPage - 1);
      setPage(currentPage - 1);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => getSaved(1), 500);
  }, []);
  return (
    <Body>
      <Container>
        <H2 style={{ margin: `32px 0` }}>Found 36 companies</H2>
        <RowContainer style={{ paddingRight: `32px` }}>
          <ButtonsPanel>
            <Button style={{ marginRight: `40px` }}>
              <img
                src={FolderPlus}
                alt="FolderPlus"
                style={{ marginRight: `10px` }}
              />
              Save list
            </Button>
            <Button style={{ marginRight: `40px` }}>
              <img src={Upload} alt="Upload" style={{ marginRight: `10px` }} />
              Export to exel
            </Button>
            <Button>
              <img src={Mail} alt="Mail" style={{ marginRight: `10px` }} />
              Accelerist Support
            </Button>
          </ButtonsPanel>
          <RowContainer style={{ width: `130px` }}>
            <Button onClick={() => prevPage(page)}>
              <img src={Left} alt="Left" />
            </Button>
            {12 * (page - 1) + 1} - {page * 12} of {12 * 3}
            <Button onClick={() => nexPage(page)}>
              <img src={Right} alt="Right" />
            </Button>
          </RowContainer>
        </RowContainer>
        {isLoading ? (
          <div
            style={{
              marginTop: `100px`,
            }}>
            <ClipLoader
              color="#ffffff"
              loading={isLoading}
              css={override}
              size={150}
            />
          </div>
        ) : (
          <>
            <RowOrList>
              {dataCompanies.slice(0, 2).map(comp => (
                <ProfileCard {...comp} key={comp.id} onClick={navigate} />
              ))}
            </RowOrList>
            <RowOrList>
              {dataCompanies.slice(2, 4).map(comp => (
                <ProfileCard {...comp} key={comp.id} onClick={navigate} />
              ))}
            </RowOrList>
            <RowOrList>
              {dataCompanies.slice(4, 6).map(comp => (
                <ProfileCard {...comp} key={comp.id} onClick={navigate} />
              ))}
            </RowOrList>
            <RowOrList>
              {dataCompanies.slice(6, 8).map(comp => (
                <ProfileCard {...comp} key={comp.id} onClick={navigate} />
              ))}
            </RowOrList>
            <RowOrList>
              {dataCompanies.slice(8, 10).map(comp => (
                <ProfileCard {...comp} key={comp.id} onClick={navigate} />
              ))}
            </RowOrList>
            <RowOrList>
              {dataCompanies.slice(10, 12).map(comp => (
                <ProfileCard {...comp} key={comp.id} onClick={navigate} />
              ))}
            </RowOrList>
          </>
        )}
      </Container>
    </Body>
  );
};

export default List;
