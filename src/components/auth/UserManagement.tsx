'use client'

import { useState } from 'react'
import { useQuery, useMutation } from 'convex/react'
import { api } from '@/../convex/_generated/api'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Select } from '@/components/ui/Select'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import {
    PiUserDuotone,
    PiPencilDuotone,
    PiCheckDuotone,
    PiXDuotone,
} from 'react-icons/pi'

type UserType = 'Internal' | 'Client'
type UserRole = 'Admin' | 'Project Manager' | 'Creative' | 'Client'

const typeOptions = ['Internal', 'Client'] as const

const roleOptions = ['Admin', 'Project Manager', 'Creative', 'Client'] as const

const UserManagement = () => {
    const [editingUser, setEditingUser] = useState<string | null>(null)
    const [editingType, setEditingType] = useState<UserType>('Client')
    const [editingRole, setEditingRole] = useState<UserRole>('Client')

    const users = useQuery(api.users.getAllUsers)
    const updateUserTypeAndRole = useMutation(api.users.updateUserTypeAndRole)

    const handleEditStart = (
        userId: string,
        currentType: UserType,
        currentRole: UserRole,
    ) => {
        setEditingUser(userId)
        setEditingType(currentType)
        setEditingRole(currentRole)
    }

    const handleEditCancel = () => {
        setEditingUser(null)
        setEditingType('Client')
        setEditingRole('Client')
    }

    const handleEditSave = async (clerkId: string) => {
        try {
            await updateUserTypeAndRole({
                clerkId,
                type: editingType,
                role: editingRole,
            })

            toast.push(
                <Notification title="Success" type="success">
                    User updated successfully!
                </Notification>,
            )

            setEditingUser(null)
        } catch (error) {
            toast.push(
                <Notification title="Error" type="danger">
                    Failed to update user:{' '}
                    {error instanceof Error ? error.message : 'Unknown error'}
                </Notification>,
            )
        }
    }

    const getTypeBadgeClass = (type: UserType) => {
        return type === 'Internal' 
            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
    }

    const getRoleBadgeClass = (role: UserRole) => {
        switch (role) {
            case 'Admin':
                return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
            case 'Project Manager':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
            case 'Creative':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            case 'Client':
                return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
        }
    }

    if (!users) {
        return <div>Loading users...</div>
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-semibold mb-2">User Management</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Manage user types and roles for platform access
                </p>
            </div>

            <div className="grid gap-4">
                {users.map((user) => (
                    <Card key={user._id} className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                    <PiUserDuotone className="text-lg" />
                                </div>
                                <div>
                                    <div className="font-medium">
                                        {user.displayName}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        {user.email}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                {editingUser === user.clerkId ? (
                                    <div className="flex items-center gap-2">
                                        <Select
                                            value={editingType}
                                            options={typeOptions}
                                            onChange={(value) =>
                                                setEditingType(value as UserType)
                                            }
                                            className="min-w-[120px]"
                                        />
                                        <Select
                                            value={editingRole}
                                            options={roleOptions}
                                            onChange={(value) =>
                                                setEditingRole(value as UserRole)
                                            }
                                            className="min-w-[140px]"
                                        />
                                        <Button
                                            size="sm"
                                            variant="solid"
                                            onClick={() =>
                                                handleEditSave(user.clerkId)
                                            }
                                        >
                                            <PiCheckDuotone />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="plain"
                                            onClick={handleEditCancel}
                                        >
                                            <PiXDuotone />
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-4">
                                        <div className="flex gap-2">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeBadgeClass(user.type)}`}>
                                                {user.type}
                                            </span>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleBadgeClass(user.role)}`}>
                                                {user.role}
                                            </span>
                                        </div>
                                        <Button
                                            size="sm"
                                            variant="plain"
                                            onClick={() =>
                                                handleEditStart(
                                                    user.clerkId,
                                                    user.type,
                                                    user.role,
                                                )
                                            }
                                        >
                                            <PiPencilDuotone />
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}

                {users.length === 0 && (
                    <Card className="p-8 text-center">
                        <PiUserDuotone className="text-4xl text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 dark:text-gray-400">
                            No users found
                        </p>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default UserManagement
