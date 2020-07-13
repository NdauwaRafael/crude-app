/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 4:37 PM
 **/
import React from 'react';
import {
  Body,
  Button,
  Container,
  Content,
  Icon,
  Left,
  List,
  ListItem,
  Text,
} from 'native-base';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {Platform, StyleSheet, View} from 'react-native';

const MenuContent = ({
  user,
  initial,
  logout,
  goToMenu,
  dismiss,
  goToProductsTab,
}) => {
  return (
    <Container style={{flex: 1, backgroundColor: '#fff'}}>
      <Content
        style={{
          paddingRight: responsiveFontSize(2),
          paddingLeft: responsiveFontSize(2),
          paddingTop: responsiveFontSize(2),
        }}>
        <View
          style={{
            justifyContent: 'flex-end',
            flexDirection: 'row',
            paddingVertical: 5,
            paddingHorizontal: 10,
            maxHeight: 40,
          }}>
          <Button
            transparent
            onPress={() => {
              dismiss();
            }}>
            <Icon
              style={{
                color: '#ec148c',
                fontWeight: '800',
                fontSize: responsiveFontSize(4),
              }}
              type="EvilIcons"
              name="close"
            />
          </Button>
        </View>

        <List style={{paddingBottom: responsiveHeight(10)}}>
          <ListItem
            itemHeader
            first
            thumbnail
            style={{
              flexDirection: 'row',
              paddingBottom: responsiveFontSize(2),
              paddingTop: responsiveFontSize(2),
            }}>
            <View style={style.avatarContainer}>
              <Text style={style.userTitleAvatar}>{initial}</Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: responsiveFontSize(2.6),
                  fontWeight: '600',
                  textAlign: 'left',
                  alignSelf: 'stretch',
                  paddingBottom: 3,
                }}>
                {user.name}
              </Text>
              <Text note style={{fontSize: responsiveFontSize(2)}}>
                Personal Investment Account
              </Text>
            </View>
          </ListItem>

          <View
            style={{
              borderBottomColor: '#eee',
              borderBottomWidth: 1,
              marginLeft: responsiveFontSize(2),
            }}
          />

          <ListItem
            Icon
            style={style.menuItem}
            button
            onPress={() => goToMenu('Profile')}>
            <Left style={{maxWidth: '10%'}}>
              <Icon
                style={style.menuIcon}
                active
                type="SimpleLineIcons"
                name="user"
              />
            </Left>
            <Body>
              <Text style={style.menuLabel}>Profile</Text>
            </Body>
          </ListItem>

          <ListItem
            Icon
            style={style.menuItem}
            button
            onPress={() => goToMenu('Calculator')}>
            <Left style={{maxWidth: '10%'}}>
              <Icon
                style={style.menuIcon}
                active
                type="SimpleLineIcons"
                name="calculator"
              />
            </Left>
            <Body>
              <Text style={style.menuLabel}>Investment Calculator</Text>
            </Body>
          </ListItem>

          <ListItem
            Icon
            style={style.menuItem}
            button
            onPress={() => {
              goToMenu('Contact');
            }}>
            <Left style={{maxWidth: '10%'}}>
              <Icon
                style={style.menuIcon}
                active
                type="SimpleLineIcons"
                name="phone"
              />
            </Left>
            <Body>
              <Text style={style.menuLabel}>Contact Us</Text>
            </Body>
          </ListItem>

          <ListItem
            Icon
            style={style.menuItem}
            button
            onPress={() => {
              goToMenu('ListDocuments');
            }}>
            <Left style={{maxWidth: '10%'}}>
              <Icon
                style={style.menuIcon}
                active
                type="SimpleLineIcons"
                name="folder-alt"
              />
            </Left>
            <Body>
              <Text style={style.menuLabel}>My Documents</Text>
            </Body>
          </ListItem>

          <ListItem
            Icon
            style={style.menuItem}
            button
            onPress={() => {
              goToMenu('Statements');
            }}>
            <Left style={{maxWidth: '10%'}}>
              <Icon
                style={style.menuIcon}
                active
                type="SimpleLineIcons"
                name="cloud-download"
              />
            </Left>
            <Body>
              <Text style={style.menuLabel}>Statements</Text>
            </Body>
          </ListItem>

          <ListItem
            Icon
            style={style.menuItem}
            button
            onPress={() => {
              goToProductsTab();
            }}>
            <Left style={{maxWidth: '10%'}}>
              <Icon
                style={style.menuIcon}
                active
                type="SimpleLineIcons"
                name="layers"
              />
            </Left>
            <Body>
              <Text style={style.menuLabel}>Products</Text>
            </Body>
          </ListItem>

          <ListItem
            Icon
            style={style.menuItem}
            button
            onPress={() => {
              goToMenu('LocationList');
            }}>
            <Left style={{maxWidth: '10%'}}>
              <Icon
                style={style.menuIcon}
                active
                type="EvilIcons"
                name="location"
              />
            </Left>
            <Body>
              <Text style={style.menuLabel}>Location</Text>
            </Body>
          </ListItem>

          <ListItem
            Icon
            style={style.menuItem}
            button
            onPress={() => {
              goToMenu('FAQs');
            }}>
            <Left style={{maxWidth: '10%'}}>
              <Icon
                style={style.menuIcon}
                active
                type="SimpleLineIcons"
                name="bubble"
              />
            </Left>
            <Body>
              <Text style={style.menuLabel}>FAQs</Text>
            </Body>
          </ListItem>

          <View
            style={{
              borderBottomColor: '#eee',
              borderBottomWidth: 1,
              paddingTop: responsiveFontSize(1),
              paddingBottom: responsiveFontSize(3.2),
            }}
          />

          <ListItem
            Icon
            style={style.menuItem}
            button
            onPress={() => {
              goToMenu('Settings');
            }}>
            <Left style={{maxWidth: '10%'}}>
              <Icon
                style={style.menuIcon}
                active
                type="SimpleLineIcons"
                name="settings"
              />
            </Left>
            <Body>
              <Text style={style.menuLabel}>Login and Security</Text>
            </Body>
          </ListItem>

          <ListItem
            Icon
            style={style.menuItem}
            button
            onPress={() => {
              goToMenu('ComingSoon');
            }}>
            <Left style={{maxWidth: '10%'}}>
              <Icon
                style={style.menuIcon}
                active
                type="SimpleLineIcons"
                name="question"
              />
            </Left>
            <Body>
              <Text style={style.menuLabel}>Help</Text>
            </Body>
          </ListItem>

          <ListItem Icon style={style.menuItem} button onPress={() => logout()}>
            <Left style={{maxWidth: '10%'}}>
              <Icon
                style={style.menuIcon}
                active
                name={Platform.OS === 'ios' ? 'ios-power' : 'md-power'}
              />
            </Left>
            <Body>
              <Text style={style.menuLabel}>Logout</Text>
            </Body>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

MenuContent.propTypes = {};

const style = StyleSheet.create({
  menuIcon: {
    fontSize: responsiveFontSize(2.3),
    color: '#ec148c',
    width: '100%',
  },
  menuLabel: {
    fontSize: responsiveFontSize(2),
    color: '#ec148c',
  },
  menuItem: {
    borderBottomWidth: 0,
    paddingTop: responsiveFontSize(2.0),
    paddingBottom: responsiveFontSize(2.0),
  },
  userTitleAvatar: {
    color: 'orange',
    fontSize: responsiveFontSize(3),
    fontWeight: '600',
  },
  avatarContainer: {
    paddingTop: responsiveFontSize(1),
    paddingBottom: responsiveFontSize(1),
    paddingRight: responsiveFontSize(2),
    paddingLeft: responsiveFontSize(2),
    borderWidth: 1,
    backgroundColor: '#eee',
    borderRadius: 50,
    borderColor: '#eee',
    maxWidth: '25%',
    marginRight: 10,
  },
});

export default MenuContent;
