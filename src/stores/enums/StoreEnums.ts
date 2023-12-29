enum Actions {
	// action types
	ADD_BODY_CLASSNAME = "addBodyClassName",
	REMOVE_BODY_CLASSNAME = "removeBodyClassName",
	ADD_BODY_ATTRIBUTE = "addBodyAttribute",
	REMOVE_BODY_ATTRIBUTE = "removeBodyAttribute",
	ADD_CLASSNAME = "addClassName",
	VERIFY_AUTH = "verifyAuth",
	LOGIN = "login",
	LOGOUT = "logout",
	REGISTER = "register",
	UPDATE_USER = "updateUser",
	FORGOT_PASSWORD = "forgotPassword",
	SET_BREADCRUMB_ACTION = "setBreadcrumbAction",
	SET_CLASSNAME_BY_POSITION = "appendBreadcrumb",
	PURGE_AUTH = "logOut",
	SET_AUTH = "setAuth",
	SET_USER = "setUser",
	SET_PASSWORD = "setPassword",
	SET_ERROR = "setError",
	GET_LAYOUT_CONFIG = 'getLayoutConfig',
	SET_LAYOUT_CONFIG = "setLayoutConfig",
	RESET_LAYOUT_CONFIG = "resetLayoutConfig",
	OVERRIDE_LAYOUT_CONFIG = "overrideLayoutConfig",
	OVERRIDE_PAGE_LAYOUT_CONFIG = "overridePageLayoutConfig"
}

export { Actions };
