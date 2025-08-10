'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Radio } from '@/components/ui/Radio'
import { useMutation } from 'convex/react'
import { api } from '@/../convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'

type UserType = 'Internal' | 'Client'
type UserRole = 'Admin' | 'Project Manager' | 'Creative' | 'Client'

const roleOptions: Record<UserType, UserRole[]> = {
    Internal: ['Admin', 'Project Manager', 'Creative'],
    Client: ['Client'],
}

type UserTypeSelectionProps = {
    onComplete?: () => void
    showTitle?: boolean
}

const UserTypeSelection = ({
    onComplete,
    showTitle = true,
}: UserTypeSelectionProps) => {
    const { user } = useUser()
    const [selectedType, setSelectedType] = useState<UserType>('Client')
    const [selectedRole, setSelectedRole] = useState<UserRole>('Client')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const updateUserTypeAndRole = useMutation(api.users.updateUserTypeAndRole)

    const handleTypeChange = (type: UserType) => {
        setSelectedType(type)
        // Set default role for the selected type
        setSelectedRole(roleOptions[type][0])
    }

    const handleSubmit = async () => {
        if (!user?.id) {
            toast.push(
                <Notification title="Error" type="danger">
                    User not authenticated
                </Notification>,
            )
            return
        }

        setIsSubmitting(true)
        try {
            await updateUserTypeAndRole({
                clerkId: user.id,
                type: selectedType,
                role: selectedRole,
            })

            toast.push(
                <Notification title="Success" type="success">
                    User type updated successfully!
                </Notification>,
            )

            onComplete?.()
        } catch (error) {
            toast.push(
                <Notification title="Error" type="danger">
                    Failed to update user type:{' '}
                    {error instanceof Error ? error.message : 'Unknown error'}
                </Notification>,
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="max-w-md mx-auto">
            {showTitle && (
                <div className="mb-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">
                        Select Your Account Type
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Choose the type that best describes your role
                    </p>
                </div>
            )}

            <div className="space-y-4">
                {/* User Type Selection */}
                <Card className="p-4">
                    <h4 className="font-medium mb-3">Account Type</h4>
                    <div className="space-y-3">
                        <Radio
                            name="userType"
                            value="Internal"
                            checked={selectedType === 'Internal'}
                            onChange={() => handleTypeChange('Internal')}
                        >
                            <div>
                                <div className="font-medium">Internal Team</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Team member working directly on projects
                                </div>
                            </div>
                        </Radio>
                        <Radio
                            name="userType"
                            value="Client"
                            checked={selectedType === 'Client'}
                            onChange={() => handleTypeChange('Client')}
                        >
                            <div>
                                <div className="font-medium">Client</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    External client accessing project
                                    information
                                </div>
                            </div>
                        </Radio>
                    </div>
                </Card>

                {/* Role Selection */}
                <Card className="p-4">
                    <h4 className="font-medium mb-3">Role</h4>
                    <div className="space-y-3">
                        {roleOptions[selectedType].map((role) => (
                            <Radio
                                key={role}
                                name="userRole"
                                value={role}
                                checked={selectedRole === role}
                                onChange={() => setSelectedRole(role)}
                            >
                                <div className="font-medium">{role}</div>
                            </Radio>
                        ))}
                    </div>
                </Card>

                <Button
                    onClick={handleSubmit}
                    loading={isSubmitting}
                    className="w-full"
                >
                    Continue
                </Button>
            </div>
        </div>
    )
}

export default UserTypeSelection
