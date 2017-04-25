import { push } from 'react-router-redux';


function navigation(dispatch) {
  return (url) => {
    return dispatch(push(url));
    /**
     switch (treeType) {
            case 'group':
                // Normally this would be an ajax call of sorts to get the data if it does not already exist
                // Instead we're faking it for now...
                const tree = buildTreeData(editData.group, treeType);
                dispatch({
                    type: TreeActions.GET_GROUPS_REQUEST,
                    payload: {
                        treeData: editData.group,
                        tree,
                        codeData: select2Data.group,
                    },
                });
                break;
            case 'type':
                break;
        }
     **/
  };
}

export default navigation;
