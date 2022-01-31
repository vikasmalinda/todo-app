import { gql } from '@apollo/client'

const TODO = gql`
    {
        todos{
            id
            description
            done
        }
    }
`;

export { TODO }