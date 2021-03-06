class Urls {
  static serverBaseUrl = process.env.REACT_APP_SERVER_BASE_URL;
  static clientBaseUrl = process.env.REACT_APP_BASE_URL;
  static serverLoginUrl = `${Urls.serverBaseUrl}/api/auth/login`;
  static severLoginWithGoogleUrl = `${Urls.serverBaseUrl}/api/auth/google`;
  static serverSignupUrl = `${Urls.serverBaseUrl}/api/auth/signup`;
  static serverTestUrl = `${Urls.serverBaseUrl}/test`;
  static getAccessTokenUrl = `${Urls.serverBaseUrl}/api/auth/getaccesstoken`;
  static sendOtpUrl = `${Urls.serverBaseUrl}/api/auth/sendotp`;
  static serverGetMeUrl = `${Urls.serverBaseUrl}/api/user/me`;
  static serverGetUserUrl = `${Urls.serverBaseUrl}/api/user/all`;
  static serverAddFriendUrl = `${Urls.serverBaseUrl}/api/user/addfriend`;
  static serverGetFriendsUrl = `${Urls.serverBaseUrl}/api/user/friends`;
}

export default Urls;
