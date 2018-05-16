import flowActionTypes from './action-types';
import menuTypes from './menu-types';

const initialState =
{
	activeMenu: menuTypes.START_PAGE,
};

const changeMenu = (state, newMenu) => ({ ...state, activeMenu: newMenu });

const reducer = (state = initialState, action) =>
{
	switch (action.type)
	{
	case flowActionTypes.CHANGE_MENU:
		return changeMenu(state, action.menuType);

	default:
		return state;
	}
};

export default reducer;
