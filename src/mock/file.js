import Mock from 'mockjs'
import moment from 'moment';

// mock方法,详细的可以看官方文档
const Random = Mock.Random

const file = [
    {
        url: '/upload/file',
        type: 'post',
        response: config => {

            return {
                code: 200,
                data: {
                    name: 'file',
                    url: Random.image('200x100', '#50B347', '#FFF', 'Mfile')
                }
            }
        }
    },
    {
        url: '/getList/file',
        type: 'get',
        response: () => {

            let fileList = []
            for (let i = 0; i < 6; i++) {
                let file = {}
                file.uid = Random.id()
                file.key = Random.id()
                file.name = Random.title(3, 5)
                file.url = Random.title(1)
                file.lastTime = moment(new Date()).format('YYYY-MM-DD HH:mm')
                fileList.push(file)
            }
            return {
                code: 200,
                data: {
                    fileList
                }
            }
        }
    },
    {
        url: '/getScurry/key',
        type: 'get',
        response: () => {
            return {
                code: 200,
                data: {
                    scurry: 'DNFG2341'
                }
            }
        }
    }
]

export default file