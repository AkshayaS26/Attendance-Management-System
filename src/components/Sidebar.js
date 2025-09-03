import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import * as tbicons from "react-icons/tb";
import * as bsicons from "react-icons/bs";
import * as mdicons from "react-icons/md";
import * as io5icons from "react-icons/io5";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mm from '../mm.jpg';



const Nav = styled.div`
  background: linear-gradient(to right, #4B0082, #4AC6D2, #6A0DAD, #4AC6D2, #4B0082);
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(NavLink)`
  margin-left: 2rem;
  font-size: 1.5rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: linear-gradient(#4B0082, #4AC6D2, #6A0DAD, #4AC6D2, #4B0082);
  width: ${({ sidebar }) => (sidebar ? "250px" : "80px")};
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  transition: width 0.3s ease;
  z-index: 10;
  overflow-y: auto;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarLink = styled(NavLink).attrs(props => ({
  activeClassName: "active",
}))`
  display: flex;
  color: white;
  justify-content: ${({ sidebar }) => (sidebar ? "space-between" : "center")};
  align-items: center;
  padding: ${({ sidebar }) => (sidebar ? "20px" : "20px 0")};
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  font-family: Helvetica;
  background: ${({ active }) => (active ? "#4AC6D2" : "transparent")};
  border-left: ${({ active }) => (active ? "4px solid white" : "none")};

  &:hover, &.active {
    background: transparent;
    border: 1px solid white;
    cursor: pointer;
  }

  span {
    display: ${({ sidebar }) => (sidebar ? "inline" : "none")};
    margin-left: ${({ sidebar }) => (sidebar ? "16px" : "0")};
  }
`;

const DropdownLink = styled(NavLink)`
  background: linear-gradient(to down,#9E15BF, #4AC6D2, #6A0DAD, #4AC6D2, #9E15BF);
  height: 60px;
  padding-left: ${({ sidebar }) => (sidebar ? "3rem" : "0")};
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 20px;
  font-family: Helvetica;

  &:hover, &.active {
    background: transparent;
    color: white;
    border: 1px solid white;
    cursor: pointer;
  }

  span {
    display: ${({ sidebar }) => (sidebar ? "inline" : "none")};
    margin-left: ${({ sidebar }) => (sidebar ? "16px" : "0")};
  }
`;

const AccordionItem = styled.div`
  border: none;
`;

const AccordionButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: ${({ sidebar }) => (sidebar ? "20px" : "20px 0")};
  text-align: left;
  font-size: 18px;
  display: flex;
  justify-content: ${({ sidebar }) => (sidebar ? "space-between" : "center")};
  align-items: center;
  color: white;

  &:hover {
    background: transparent;
    cursor: pointer;
    border: 2px solid white;
  }

  span {
    display: ${({ sidebar }) => (sidebar ? "inline" : "none")};
    margin-left: ${({ sidebar }) => (sidebar ? "16px" : "0")};
  }
`;

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
`;

const Logo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

const Sidebar = ({ onLogoutClick }) => {
  const [sidebar, setSidebar] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const location = useLocation();

  const showSidebar = () => setSidebar(!sidebar);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSearchClick = () => setShowSearchModal(true);
  const handleNotificationsClick = () => setShowNotificationsModal(true);
  const handleSettingsClick = () => setShowSettingsModal(true);

  const handleCloseModal = () => {
    setShowSearchModal(false);
    setShowNotificationsModal(false);
    setShowSettingsModal(false);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <Nav>
          <h1 style={{ marginLeft: "300px", color: "white", fontFamily: 'Helvetica', fontWeight: 'bold' }}>
            MotherSon
          </h1>
          <FaIcons.FaSearch style={{ fontSize: '1.5rem', marginLeft: '800px' }} onClick={handleSearchClick} />
          <io5icons.IoNotifications style={{ fontSize: '1.5rem', marginLeft: '25px' }} onClick={handleNotificationsClick} />
          <io5icons.IoSettingsSharp style={{ fontSize: '1.5rem', marginLeft: '25px' }} onClick={handleSettingsClick} />
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
            <LogoWrapper>
              <Logo src={mm} alt="MotherSon Logo" />
            </LogoWrapper>
            {SidebarData.map((item, index) => (
              <AccordionItem key={index}>
                {item.subNav ? (
                  <>
                    <AccordionButton sidebar={sidebar} onClick={() => toggleAccordion(index)}>
                      <div>
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                      <span>{activeIndex === index ? item.iconOpened : item.iconClosed}</span>
                    </AccordionButton>
                    {activeIndex === index && sidebar && (
                      <div className='accordion-body'>
                        {item.subNav.map((subItem, subIndex) => (
                          <DropdownLink to={subItem.path} key={subIndex} activeClassName="active" sidebar={sidebar}>
                            {subItem.icon}
                            <span>{subItem.title}</span>
                          </DropdownLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <SidebarLink to={item.path} activeClassName="active" sidebar={sidebar} isActive={() => location.pathname === item.path}>
                    <div>
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                  </SidebarLink>
                )}
              </AccordionItem>
            ))}
            <SidebarLink to="#" onClick={onLogoutClick} sidebar={sidebar} className="logout-link">
              <tbicons.TbLogout2 />
              <span style={{ marginRight: '118px' }}>Logout</span>
            </SidebarLink>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>

      {/* Modals */}
      <Modal show={showSearchModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Search
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body ><div ><input type='text' className='form-control mb-1 style-input'  style={{border:'1px solid black'}}placeholder="Search here"  ></input>
          </div></Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showNotificationsModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body >No notifications available.</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSettingsModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mx-2" >
          <tr ><mdicons.MdEmail  />       Update email</tr>
          <tr><mdicons.MdPrivacyTip />      Privacy</tr>
          <tr><mdicons.MdManageAccounts />      Manage accounts</tr>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Sidebar;