import React from 'react'
import RenderVideo from '../videos';

const videoUrl = [
    {
        id: 1,
        url: 'https://v16-webapp.tiktok.com/5610977d93780720ca4d0dad6c560676/630624de/video/tos/useast2a/tos-useast2a-pve-0068/a015cf81fcaf4d34a952a81e499e68a4/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2216&bt=1108&cs=0&ds=3&ft=eXd.6HpDMyq8ZArZJhe2NCewyl7Gb&mime_type=video_mp4&qs=0&rc=ZzVnaWc7OmU1OzczNzQ6OkBpM3A1ZDk6Zmg2OzMzNzczM0AxXjVeMzVgXy0xNWEvXzUzYSM1bGkxcjQwYzBgLS1kMTZzcw%3D%3D&l=2022082407170601019205706725005AA5&btag=80000'
    },
    {
        id: 2,
        url: 'https://v16-webapp.tiktok.com/2f4d424be5c1a0e72c524cfffcb29781/6306253a/video/tos/useast2a/tos-useast2a-ve-0068c003/07f3bf5a8c28416ab1213ee219a9ded7/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2898&bt=1449&cs=0&ds=3&ft=eXd.6HpDMyq8ZugZJhe2Ny6eyl7Gb&mime_type=video_mp4&qs=0&rc=ZjlpaWQ8NTxoaWlmZjM2NUBpajY0NDU6ZjV5ZTMzNzczM0BeNjEwNDBjXzUxL2NfYDIuYSMvL2ZxcjRfbC9gLS1kMTZzcw%3D%3D&l=20220824071828010192055146090034C5&btag=80000'
    },
    {
        id: 3,
        url: 'https://v16-webapp.tiktok.com/39e287748994bd8976af983d72f87fdc/630612bf/video/tos/useast2a/tos-useast2a-ve-0068c003/b743457e961a4b66a1963546af44f3f3/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3136&bt=1568&cs=0&ds=3&ft=eXd.6HpDMyq8ZA~xJhe2NbgJLl7Gb&mime_type=video_mp4&qs=0&rc=ZGk2ZThkNTw2MzhpaGc0NkBpajRueDs6ZjR1PDMzNzczM0AxNTNhXzEyNS8xLTAyLWJjYSNoaGBpcjRfcC1gLS1kMTZzcw%3D%3D&l=2022082405591501018906513427618D72&btag=80000'
    },
    {
        id: 4,
        url: 'https://v16-webapp.tiktok.com/3485930426809751ce4f575f871aa630/630612af/video/tos/useast2a/tos-useast2a-pve-0068/99b9e973efaa43ecbdb685d2b0a563c3/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3648&bt=1824&cs=0&ds=3&ft=eXd.6HpDMyq8ZA~xJhe2NbgJLl7Gb&mime_type=video_mp4&qs=0&rc=OGQ3ZDw6PGk6OmVoZmk2aUBpams5azY6ZjtxOzMzNzczM0BfMDBgYzU0XzIxMi5eM14vYSNyMjUycjRnYl9gLS1kMTZzcw%3D%3D&l=2022082405591501018906513427618D72&btag=80000'
    },
    {
        id: 5,
        url: 'https://v16-webapp.tiktok.com/334e2ce2397c76f268401fb0810eb885/63062c4d/video/tos/useast2a/tos-useast2a-ve-0068c001/e008da146e8b4c08b4dd21ce4b22a2e5/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1760&bt=880&cs=0&ds=3&ft=eXd.6HpDMyq8ZXMZJhe2NFy6yl7Gb&mime_type=video_mp4&qs=0&rc=ZTVpNWU1M2hmM2Y7ZTY0aUBpanR3d25rc2R0NjMzNzczM0BgLl4xMDYvNjAxYWM1LS1hYSNiL2lybGRlNmRgLS1kMTZzcw%3D%3D&l=202208240748490101890732050900D2D2&btag=80000'
    },
    {
        id: 6,
        url: 'https://v16-webapp.tiktok.com/65996666e647ce862d26497c79542b00/63062cb1/video/tos/maliva/tos-maliva-ve-0068c799-us/fcfb0a31edf54320b928d33bd4c523e1/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1962&bt=981&cs=0&ds=3&ft=eXd.6HpDMyq8ZYSZJhe2N7Ewyl7Gb&mime_type=video_mp4&qs=0&rc=aTk1aDs1ZDU6OTY2OTk8ZkBpamgzcTk6Zm5xOTMzZzczNEBfXjEzLjMtXzQxXmEzLTEyYSM2azMwcjRnci1gLS1kMS9zcw%3D%3D&l=202208240750210102170861680C0099C6&btag=80000'
    },
    {
        id: 7,
        url: 'https://v16-webapp.tiktok.com/786428d484b7046b5a97d76eeb890d4b/63062ce2/video/tos/useast2a/tos-useast2a-ve-0068c001/859755bd208c4cb8b2e523eee3c9d584/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=5628&bt=2814&cs=0&ds=3&ft=eXd.6HpDMyq8ZbtZJhe2NBIjyl7Gb&mime_type=video_mp4&qs=0&rc=OThkMzo5NzU2OTQ1aWUzM0BpajtycTU6ZnE5OzMzNzczM0AzLS5iLjFeNjExXjIzLS8yYSNtYmUzcjRfbmtgLS1kMTZzcw%3D%3D&l=2022082407512201021702615422009A5C&btag=80000'
    },
]

const FeedVideos = () => {
  return (
        videoUrl.map( video => {
            return <div className='slide'>
                <RenderVideo key={video.id} src={video.url}  />
            </div>
        })
  )
}

export default FeedVideos