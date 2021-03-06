import React from 'react'
import Request from '../Request';
import { useCookies } from 'react-cookie';
import { goToPage } from '../Utils';

function GitLabAuthRedirect() {
    const [, setCookies, removeCookie] = useCookies(['gitlab_token'])

    React.useEffect(() => {
        var code = window.location.href.split("?code=")[1].split("&state=")[0]
        var state = window.location.href.split("?code=")[1].split("&state=")[1]
        Request.getAccessToken(code, state).then((res) => {
            setCookies('gitlab_token', res.access_token, {path: '/'})
            Request.postToken(res.access_token).then((res) => {
                console.log(res)
            }).catch((err) => {
                removeCookie("gitlab_token")
            })
            goToPage('/profile')
        }).catch((err) => {
            console.log(err.response)
        })
    })
    return (
        <div>GitLabAuthRedirect</div>
    )
}

export default GitLabAuthRedirect